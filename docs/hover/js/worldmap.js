/*
	World builder for Hover! Maze.

	A level is a stack of storeys (see js/levels.js). This turns one into
	geometry, colliders, ramps and flag positions, and can tear it all down
	again so the next level can be built without reloading the page.

	Rows run along +X, columns along +Z, one cell per CELL units.

		V( f, r, c )   wall on the +Z side of cell ( r, c ) on storey f
		H( f, r, c )   wall on the +X side of cell ( r, c ) on storey f

	Decks are not colliders. What holds the craft up is surfaceAt(), which
	reports the height of the highest deck the craft could be resting on; drive
	past the edge of one and there is nothing under you but the storey below.

	Static geometry is merged into one mesh per material, so a whole world
	costs a handful of draw calls however many buildings are in it.
*/

var CELL = 450;					// distance between two parallel walls
var FLOOR_HEIGHT = 240;			// vertical distance between storeys
var WALL_HEIGHT = 216;			// walls stop just under the deck they carry
var DECK_THICKNESS = 24;
var WallThickness = 25;
// A kerb marks the lip of a deck without closing it. The craft floats
// HOVER_HEIGHT up with a 15-unit collider, so its lowest point clears 15: keep
// the kerb under that and it is a line you can see and a lip you can drive off.
var KERB_HEIGHT = 12;
var KERB_WIDTH = 46;			// wider than a wall, and darker, so the lip reads
								// from a shallow angle as well as head on

var STEP_UP = 30;				// how far the craft can climb without a ramp

// The ground plane sits on its own layer so the map camera can leave it out.
// Without that it would fill the map with a sheet of paving.
var GROUND_LAYER = 2;

var RAMP_CHARS = '^v><';

var World = {

	ground: 0,			// index of the storey sitting at y = 0
	group: null,		// everything belonging to the current level
	colliders: [],		// Box3 per solid piece
	normals: [],		// surface normal per collider, for bounce reflection
	movingWalls: [],
	movingKeys: [],
	movingColliders: [],

	plan: null,			// parsed storeys
	ramps: [],			// ramp runs
	rampLookup: null,	// cell -> ramp run index, per storey
	flags: [],			// { x, z, y, floor }
	start: null,		// { x, z, y, floor, heading }
	bounds: null,

	_buckets: null,
	_disposables: []

};


/* --------------------------------------------------------------------------
	Geometry merging
   ------------------------------------------------------------------------ */

function Merger() {

	this.position = [];
	this.normal = [];
	this.uv = [];
	this.index = [];
	this.vertexCount = 0;

}

Merger.prototype.add = function () {

	var v = new THREE.Vector3();
	var n = new THREE.Vector3();
	var normalMatrix = new THREE.Matrix3();

	return function add( geometry, matrix ) {

		var pos = geometry.attributes.position;
		var nrm = geometry.attributes.normal;
		var uv = geometry.attributes.uv;

		normalMatrix.getNormalMatrix( matrix );

		for ( var i = 0; i < pos.count; i ++ ) {

			v.fromBufferAttribute( pos, i ).applyMatrix4( matrix );
			this.position.push( v.x, v.y, v.z );

			n.fromBufferAttribute( nrm, i ).applyMatrix3( normalMatrix ).normalize();
			this.normal.push( n.x, n.y, n.z );

			this.uv.push( uv.getX( i ), uv.getY( i ) );

		}

		if ( geometry.index ) {

			var idx = geometry.index;
			for ( var j = 0; j < idx.count; j ++ ) this.index.push( idx.getX( j ) + this.vertexCount );

		} else {

			for ( var k = 0; k < pos.count; k ++ ) this.index.push( k + this.vertexCount );

		}

		this.vertexCount += pos.count;

	};

}();

Merger.prototype.isEmpty = function () {

	return this.vertexCount === 0;

};

Merger.prototype.build = function () {

	var geometry = new THREE.BufferGeometry();
	geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( this.position, 3 ) );
	geometry.setAttribute( 'normal', new THREE.Float32BufferAttribute( this.normal, 3 ) );
	geometry.setAttribute( 'uv', new THREE.Float32BufferAttribute( this.uv, 2 ) );
	geometry.setIndex( this.index );
	geometry.computeBoundingSphere();
	return geometry;

};


/* --------------------------------------------------------------------------
	Parsing
   ------------------------------------------------------------------------ */

/* Reads the ASCII plans into wall sets and a cell lookup per storey.

	Each cell occupies three characters of a cell line: the wall slot, then two
	characters of contents. Only the first content character carries meaning. */
function parseLevel( def ) {

	var rows = def.rows;
	var cols = def.cols;
	var storeys = [];
	var r, c, f;

	for ( f = 0; f < def.floors; f ++ ) {

		var lines = def.grid[ f ];
		var V = {};
		var H = {};
		var cells = new Array( rows * cols );

		for ( r = 0; r < rows; r ++ ) {

			var top = lines[ 2 * ( rows - 1 - r ) ] || '';
			var mid = lines[ 2 * ( rows - 1 - r ) + 1 ] || '';

			for ( c = 0; c < cols; c ++ ) {

				if ( top.substr( 3 * c + 1, 2 ) === '--' ) H[ r + ':' + c ] = true;
				if ( mid.charAt( 3 * c ) === '|' ) V[ r + ':' + ( c - 1 ) ] = true;

				cells[ r * cols + c ] = mid.charAt( 3 * c + 1 ) || ' ';

			}

			if ( mid.charAt( 3 * cols ) === '|' ) V[ r + ':' + ( cols - 1 ) ] = true;

		}

		var bottom = lines[ 2 * rows ] || '';
		for ( c = 0; c < cols; c ++ ) {

			if ( bottom.substr( 3 * c + 1, 2 ) === '--' ) H[ '-1:' + c ] = true;

		}

		storeys.push( { V: V, H: H, cells: cells } );

	}

	return {

		rows: rows,
		cols: cols,
		floors: def.floors,
		storeys: storeys,

		cellAt: function ( floor, row, col ) {

			if ( floor < 0 || floor >= this.floors ) return ' ';
			if ( row < 0 || row >= this.rows || col < 0 || col >= this.cols ) return ' ';
			return this.storeys[ floor ].cells[ row * this.cols + col ];

		},

		hasV: function ( floor, row, col ) {

			return this.storeys[ floor ].V[ row + ':' + col ] === true;

		},

		hasH: function ( floor, row, col ) {

			return this.storeys[ floor ].H[ row + ':' + col ] === true;

		}

	};

}

var RAMP_STEPS = { '^': [ 1, 0 ], 'v': [ - 1, 0 ], '>': [ 0, 1 ], '<': [ 0, - 1 ] };

/* Groups ramp cells into runs and records the climb each one carries.

	A run climbs exactly one storey from its low edge to its high edge, however
	many cells long it is, so the deck it serves meets it flush. */
function findRamps( plan ) {

	var runs = [];
	var lookup = [];
	var f, r, c;

	for ( f = 0; f < plan.floors; f ++ ) {

		var table = new Int32Array( plan.rows * plan.cols );
		for ( var i = 0; i < table.length; i ++ ) table[ i ] = - 1;
		lookup.push( table );

	}

	for ( f = 0; f < plan.floors; f ++ ) {

		for ( r = 0; r < plan.rows; r ++ ) {

			for ( c = 0; c < plan.cols; c ++ ) {

				var ch = plan.cellAt( f, r, c );
				if ( RAMP_CHARS.indexOf( ch ) === - 1 ) continue;
				if ( lookup[ f ][ r * plan.cols + c ] !== - 1 ) continue;

				var dr = RAMP_STEPS[ ch ][ 0 ];
				var dc = RAMP_STEPS[ ch ][ 1 ];

				// Walk back to the low end, then forward to the high end.
				var r0 = r, c0 = c;
				while ( plan.cellAt( f, r0 - dr, c0 - dc ) === ch ) { r0 -= dr; c0 -= dc; }

				var r1 = r, c1 = c;
				while ( plan.cellAt( f, r1 + dr, c1 + dc ) === ch ) { r1 += dr; c1 += dc; }

				var alongX = dr !== 0;
				var sign = alongX ? dr : dc;

				var run = {
					alongX: alongX,
					low: ( alongX ? r0 * CELL : c0 * CELL ) - sign * CELL / 2,
					high: ( alongX ? r1 * CELL : c1 * CELL ) + sign * CELL / 2,
					cross: alongX ? c * CELL : r * CELL,
					baseY: storeyY( f ),
					cells: Math.abs( alongX ? r1 - r0 : c1 - c0 ) + 1
				};

				var index = runs.length;
				runs.push( run );

				var rr = r0, cc = c0;
				for ( var step = 0; step < run.cells; step ++ ) {

					lookup[ f ][ rr * plan.cols + cc ] = index;
					rr += dr; cc += dc;

				}

			}

		}

	}

	return { runs: runs, lookup: lookup };

}

/* World-space height of a storey's deck. Storeys below the ground index are
	the sunken passages, so this comes back negative. */
function storeyY( f ) {

	return ( f - World.ground ) * FLOOR_HEIGHT;

}

/* Which storey a height belongs to. */
function storeyAt( y ) {

	return Math.round( y / FLOOR_HEIGHT ) + World.ground;

}

/* Height of a ramp's surface at a point along its run. */
function rampHeight( run, x, z ) {

	var p = run.alongX ? x : z;
	var t = ( p - run.low ) / ( run.high - run.low );
	return run.baseY + FLOOR_HEIGHT * Math.min( 1, Math.max( 0, t ) );

}

/* The deck the craft is resting on: the highest surface under it that it could
	have reached, given it can only climb STEP_UP without a ramp. Falls back to
	the ground plane at zero. */
function surfaceAt( x, z, fromY ) {

	var plan = World.plan;
	if ( ! plan ) return 0;

	var r = Math.round( x / CELL );
	var c = Math.round( z / CELL );
	var best = - Infinity;

	for ( var f = 0; f < plan.floors; f ++ ) {

		if ( plan.cellAt( f, r, c ) === ' ' ) continue;

		var runIndex = World.rampLookup[ f ][ r * plan.cols + c ];
		var height = runIndex === - 1 ?
			storeyY( f ) :
			rampHeight( World.ramps[ runIndex ], x, z );

		if ( height <= fromY + STEP_UP && height > best ) best = height;

	}

	// Nothing underneath means the craft is off the grid, out on the apron that
	// runs to the horizon.
	return best === - Infinity ? 0 : best;

}


/* --------------------------------------------------------------------------
	Building
   ------------------------------------------------------------------------ */

function addCollider( box, normal ) {

	World.colliders.push( box );
	World.normals.push( normal );

}

/* Buckets colliders by cell so collision tests only look nearby. */
function buildColliderIndex() {

	var buckets = {};

	for ( var i = 0; i < World.colliders.length; i ++ ) {

		var box = World.colliders[ i ];
		var r0 = Math.floor( box.min.x / CELL - 0.5 );
		var r1 = Math.floor( box.max.x / CELL + 0.5 );
		var c0 = Math.floor( box.min.z / CELL - 0.5 );
		var c1 = Math.floor( box.max.z / CELL + 0.5 );

		for ( var r = r0; r <= r1; r ++ ) {

			for ( var c = c0; c <= c1; c ++ ) {

				var key = r + ':' + c;
				if ( buckets[ key ] === undefined ) buckets[ key ] = [];
				buckets[ key ].push( i );

			}

		}

	}

	World._buckets = buckets;

}

function collidersNear( point ) {

	var out = [];
	var r0 = Math.round( point.x / CELL );
	var c0 = Math.round( point.z / CELL );

	for ( var r = r0 - 1; r <= r0 + 1; r ++ ) {

		for ( var c = c0 - 1; c <= c0 + 1; c ++ ) {

			var bucket = World._buckets[ r + ':' + c ];
			if ( bucket === undefined ) continue;

			for ( var i = 0; i < bucket.length; i ++ ) {

				if ( out.indexOf( bucket[ i ] ) === - 1 ) out.push( bucket[ i ] );

			}

		}

	}

	return out;

}

/* Walls, and the posts that finish their corners. Each storey's walls carry
	their own height range, so a wall on one deck cannot block the one below. */
function buildWalls( plan, merger, quality ) {

	var seg = quality.wallSegments;
	var geoV = new THREE.BoxBufferGeometry( CELL, WALL_HEIGHT, WallThickness, seg, seg, seg );
	var geoH = new THREE.BoxBufferGeometry( WallThickness, WALL_HEIGHT, CELL, seg, seg, seg );
	var geoPost = new THREE.CylinderBufferGeometry( WallThickness / 2 - 2.25, WallThickness / 2 - 2.25, WALL_HEIGHT, 3 );

	var matrix = new THREE.Matrix4();
	var quat = new THREE.Quaternion();
	var scale = new THREE.Vector3( 1, 1, 1 );
	var up = new THREE.Vector3( 0, 1, 0 );
	var halfT = WallThickness / 2;
	var f, r, c, x, z;

	for ( f = 0; f < plan.floors; f ++ ) {

		var baseY = storeyY( f );

		for ( r = - 1; r <= plan.rows; r ++ ) {

			for ( c = - 1; c <= plan.cols; c ++ ) {

				if ( plan.hasV( f, r, c ) ) {

					x = r * CELL;
					z = ( c + 0.5 ) * CELL;
					matrix.makeTranslation( x, baseY + WALL_HEIGHT / 2, z );
					merger.add( geoV, matrix );
					addCollider( new THREE.Box3(
						new THREE.Vector3( x - CELL / 2, baseY, z - halfT ),
						new THREE.Vector3( x + CELL / 2, baseY + WALL_HEIGHT, z + halfT ) ),
					new THREE.Vector3( 0, 0, 1 ) );

				}

				if ( plan.hasH( f, r, c ) ) {

					x = ( r + 0.5 ) * CELL;
					z = c * CELL;
					matrix.makeTranslation( x, baseY + WALL_HEIGHT / 2, z );
					merger.add( geoH, matrix );
					addCollider( new THREE.Box3(
						new THREE.Vector3( x - halfT, baseY, z - CELL / 2 ),
						new THREE.Vector3( x + halfT, baseY + WALL_HEIGHT, z + CELL / 2 ) ),
					new THREE.Vector3( 1, 0, 0 ) );

				}

			}

		}

		// Posts wherever walls turn or end, never mid-run.
		for ( r = - 1; r < plan.rows; r ++ ) {

			for ( c = - 1; c < plan.cols; c ++ ) {

				var south = plan.hasV( f, r, c );
				var north = plan.hasV( f, r + 1, c );
				var west = plan.hasH( f, r, c );
				var east = plan.hasH( f, r, c + 1 );

				var count = ( south ? 1 : 0 ) + ( north ? 1 : 0 ) + ( west ? 1 : 0 ) + ( east ? 1 : 0 );
				if ( count === 0 ) continue;
				if ( count === 2 && ( ( south && north ) || ( west && east ) ) ) continue;

				var dx = ( north ? 1 : 0 ) - ( south ? 1 : 0 );
				var dz = ( east ? 1 : 0 ) - ( west ? 1 : 0 );
				var angle = ( dx === 0 && dz === 0 ) ? 0 : Math.atan2( - dx, - dz );

				x = ( r + 0.5 ) * CELL;
				z = ( c + 0.5 ) * CELL;

				quat.setFromAxisAngle( up, angle );
				matrix.compose( new THREE.Vector3( x, baseY + WALL_HEIGHT / 2, z ), quat, scale );
				merger.add( geoPost, matrix );

				addCollider( new THREE.Box3(
					new THREE.Vector3( x - halfT, baseY, z - halfT ),
					new THREE.Vector3( x + halfT, baseY + WALL_HEIGHT, z + halfT ) ),
				null );

			}

		}

	}

	geoV.dispose();
	geoH.dispose();
	geoPost.dispose();

}

/* Deck slabs for every storey above the ground, plus the sloped slabs that
	carry the ramps between them. */
function buildDecks( plan, merger, kerbMerger, groundMerger ) {

	var slab = new THREE.BoxBufferGeometry( CELL, DECK_THICKNESS, CELL );
	slab.translate( 0, - DECK_THICKNESS / 2, 0 );

	var matrix = new THREE.Matrix4();

	for ( var f = 0; f < plan.floors; f ++ ) {

		// The plaza is paving like any other deck, but it goes in its own mesh:
		// the map camera leaves it out, and where a trench is cut through it
		// there simply is no slab.
		var into = f === World.ground ? groundMerger : merger;

		for ( var r = 0; r < plan.rows; r ++ ) {

			for ( var c = 0; c < plan.cols; c ++ ) {

				var ch = plan.cellAt( f, r, c );
				if ( ch === ' ' || RAMP_CHARS.indexOf( ch ) !== - 1 ) continue;

				matrix.makeTranslation( r * CELL, storeyY( f ), c * CELL );
				into.add( slab, matrix );

				buildKerbs( plan, f, r, c, kerbMerger, matrix );

			}

		}

	}

	slab.dispose();

	for ( var i = 0; i < World.ramps.length; i ++ ) {

		buildRamp( World.ramps[ i ], merger, matrix );

	}

}

/* A solid ramp: a wedge of masonry rather than a floating slab, so its sides
	read as stonework and the craft cannot drive in under it.

	The wedge is built climbing towards +X and then turned to face, with the
	origin at the centre of its base. */
function buildRamp( run, merger, matrix ) {

	var length = Math.abs( run.high - run.low );
	var cells = run.cells;
	var half = length / 2;
	var wide = CELL / 2;
	var top = FLOOR_HEIGHT;

	// low edge, high edge top, high edge bottom
	var p = [
		[ - half, 0, - wide ], [ - half, 0, wide ],
		[ half, top, - wide ], [ half, top, wide ],
		[ half, 0, - wide ], [ half, 0, wide ]
	];

	var slope = Math.sqrt( length * length + top * top );
	var nSlope = [ - top / slope, length / slope, 0 ];

	var faces = [
		// sloped surface, tiled along the run
		[ 0, 1, 3, nSlope, [ [ 0, 0 ], [ 0, 1 ], [ cells, 1 ] ] ],
		[ 0, 3, 2, nSlope, [ [ 0, 0 ], [ cells, 1 ], [ cells, 0 ] ] ],
		// vertical face at the high end
		[ 4, 3, 5, [ 1, 0, 0 ], [ [ 0, 0 ], [ 1, 1 ], [ 1, 0 ] ] ],
		[ 4, 2, 3, [ 1, 0, 0 ], [ [ 0, 0 ], [ 0, 1 ], [ 1, 1 ] ] ],
		// underside
		[ 0, 4, 5, [ 0, - 1, 0 ], [ [ 0, 0 ], [ cells, 0 ], [ cells, 1 ] ] ],
		[ 0, 5, 1, [ 0, - 1, 0 ], [ [ 0, 0 ], [ cells, 1 ], [ 0, 1 ] ] ],
		// the two triangular flanks
		[ 0, 2, 4, [ 0, 0, - 1 ], [ [ 0, 0 ], [ cells, 1 ], [ cells, 0 ] ] ],
		[ 1, 5, 3, [ 0, 0, 1 ], [ [ 0, 0 ], [ cells, 0 ], [ cells, 1 ] ] ]
	];

	var position = [];
	var normal = [];
	var uv = [];

	for ( var f = 0; f < faces.length; f ++ ) {

		var face = faces[ f ];

		for ( var v = 0; v < 3; v ++ ) {

			var point = p[ face[ v ] ];
			position.push( point[ 0 ], point[ 1 ], point[ 2 ] );
			normal.push( face[ 3 ][ 0 ], face[ 3 ][ 1 ], face[ 3 ][ 2 ] );
			uv.push( face[ 4 ][ v ][ 0 ], face[ 4 ][ v ][ 1 ] );

		}

	}

	var geometry = new THREE.BufferGeometry();
	geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( position, 3 ) );
	geometry.setAttribute( 'normal', new THREE.Float32BufferAttribute( normal, 3 ) );
	geometry.setAttribute( 'uv', new THREE.Float32BufferAttribute( uv, 2 ) );

	var rising = run.high > run.low;
	var turn = run.alongX ? ( rising ? 0 : Math.PI ) : ( rising ? - Math.PI / 2 : Math.PI / 2 );

	var mid = ( run.low + run.high ) / 2;

	matrix.makeRotationY( turn );
	matrix.setPosition(
		run.alongX ? mid : run.cross,
		run.baseY,
		run.alongX ? run.cross : mid );

	merger.add( geometry, matrix );
	geometry.dispose();

	// Colliders step up under the slope, held a little below the driving
	// surface so the craft rides over them instead of scraping along.
	var step = ( run.high - run.low ) / cells;
	var startCoord = run.low;

	for ( var i = 1; i < cells; i ++ ) {

		var height = run.baseY + FLOOR_HEIGHT * i / cells - 24;
		if ( height <= run.baseY + 4 ) continue;

		var a = startCoord + step * i;
		var b = startCoord + step * ( i + 1 );
		var lo = Math.min( a, b );
		var hi = Math.max( a, b );

		var box = run.alongX ?
			new THREE.Box3(
				new THREE.Vector3( lo, run.baseY, run.cross - CELL / 2 ),
				new THREE.Vector3( hi, height, run.cross + CELL / 2 ) ) :
			new THREE.Box3(
				new THREE.Vector3( run.cross - CELL / 2, run.baseY, lo ),
				new THREE.Vector3( run.cross + CELL / 2, height, hi ) );

		addCollider( box, null );

	}

}

/* Kerbs the open sides of a deck cell, leaving a gap where a ramp arrives.

	Without this a terrace reads as paving running to the horizon and there is
	nothing to say where the edge is. It carries no collider, though: driving
	over the lip and dropping to whatever is below is a route, and often the
	quickest one down. */
function buildKerbs( plan, f, r, c, merger, matrix ) {

	var sides = [ [ 1, 0 ], [ - 1, 0 ], [ 0, 1 ], [ 0, - 1 ] ];
	var baseY = storeyY( f );

	for ( var i = 0; i < sides.length; i ++ ) {

		var dr = sides[ i ][ 0 ];
		var dc = sides[ i ][ 1 ];

		if ( plan.cellAt( f, r + dr, c + dc ) !== ' ' ) continue;

		// A ramp arriving from the storey below opens the kerb where it lands.
		var under = plan.cellAt( f - 1, r + dr, c + dc );
		if ( RAMP_CHARS.indexOf( under ) !== - 1 ) {

			var step = RAMP_STEPS[ under ];
			if ( step[ 0 ] === - dr && step[ 1 ] === - dc ) continue;

		}

		var x = ( r + dr * 0.5 ) * CELL;
		var z = ( c + dc * 0.5 ) * CELL;

		var geometry = dr !== 0 ?
			new THREE.BoxBufferGeometry( KERB_WIDTH, KERB_HEIGHT, CELL ) :
			new THREE.BoxBufferGeometry( CELL, KERB_HEIGHT, KERB_WIDTH );

		matrix.makeTranslation( x, baseY + KERB_HEIGHT / 2, z );
		merger.add( geometry, matrix );
		geometry.dispose();

	}

}

/* Four slabs filling the gap between the ward and the horizon.

	The plaza itself is built cell by cell so trenches can be cut out of it, so
	something has to carry the ground on out past the boundary wall. The seam
	falls underneath that wall, where nobody sees it. */
function buildApron( plan, merger ) {

	var reach = 20000;
	var x0 = - CELL / 2, x1 = ( plan.rows - 0.5 ) * CELL;
	var z0 = - CELL / 2, z1 = ( plan.cols - 0.5 ) * CELL;

	var pieces = [
		[ x0 - reach, x1 + reach, z0 - reach, z0 ],
		[ x0 - reach, x1 + reach, z1, z1 + reach ],
		[ x0 - reach, x0, z0, z1 ],
		[ x1, x1 + reach, z0, z1 ]
	];

	var matrix = new THREE.Matrix4();

	for ( var i = 0; i < pieces.length; i ++ ) {

		var p = pieces[ i ];
		var geometry = new THREE.BoxBufferGeometry( p[ 1 ] - p[ 0 ], DECK_THICKNESS, p[ 3 ] - p[ 2 ] );
		geometry.translate( 0, - DECK_THICKNESS / 2, 0 );

		matrix.makeTranslation( ( p[ 0 ] + p[ 1 ] ) / 2, 0, ( p[ 2 ] + p[ 3 ] ) / 2 );
		merger.add( geometry, matrix );
		geometry.dispose();

	}

}

/* A small deterministic generator, so decal scatter is identical every run. */
function seededRandom( seed ) {

	var s = seed >>> 0;
	return function () {

		s = ( s * 1664525 + 1013904223 ) >>> 0;
		return s / 4294967296;

	};

}

/* Shields and banners, scattered over ground-floor walls. */
function buildDecals( def, plan, quality ) {

	var rand = seededRandom( 1000 + def.index * 7919 );
	var placements = [];

	for ( var r = 0; r < plan.rows; r ++ ) {

		for ( var c = 0; c < plan.cols; c ++ ) {

			if ( plan.cellAt( 0, r, c ) === ' ' ) continue;

			var sides = [];
			if ( plan.hasV( 0, r, c - 1 ) ) sides.push( 'z-' );
			if ( plan.hasV( 0, r, c ) ) sides.push( 'z+' );
			if ( plan.hasH( 0, r, c ) ) sides.push( 'x+' );
			if ( plan.hasH( 0, r - 1, c ) ) sides.push( 'x-' );

			if ( sides.length === 0 || rand() > 0.12 ) continue;

			placements.push( [ r, c, sides[ Math.floor( rand() * sides.length ) ], Math.floor( rand() * 3 ) ] );

		}

	}

	placements = placements.slice( 0, quality.maxDecals );

	var textures = [
		getTexture( 'data/crossed_swords_shield.png' ),
		getTexture( 'data/prussian_shield.png' ),
		getTexture( 'data/red_banner.jpg' )
	];

	var inset = WallThickness / 2 + 0.25;
	var lights = 0;

	for ( var i = 0; i < placements.length; i ++ ) {

		var p = placements[ i ];
		var cx = p[ 0 ] * CELL;
		var cz = p[ 1 ] * CELL;
		var side = p[ 2 ];

		var material = new THREE.MeshBasicMaterial( { color: 0xffffff, map: textures[ p[ 3 ] % 3 ], transparent: true } );
		var mesh = new THREE.Mesh( new THREE.PlaneBufferGeometry( 70, 70 ), material );
		World._disposables.push( material, mesh.geometry );

		var lightX = cx, lightZ = cz;

		if ( side === 'z-' ) {

			mesh.position.set( cx, 95, cz - CELL / 2 + inset );
			lightZ = cz - CELL / 4;

		} else if ( side === 'z+' ) {

			mesh.position.set( cx, 95, cz + CELL / 2 - inset );
			mesh.rotateY( Math.PI );
			lightZ = cz + CELL / 4;

		} else if ( side === 'x+' ) {

			mesh.position.set( cx + CELL / 2 - inset, 95, cz );
			mesh.rotateY( - Math.PI / 2 );
			lightX = cx + CELL / 4;

		} else {

			mesh.position.set( cx - CELL / 2 + inset, 95, cz );
			mesh.rotateY( Math.PI / 2 );
			lightX = cx - CELL / 4;

		}

		World.group.add( mesh );

		if ( lights < quality.maxLights ) {

			var light = new THREE.PointLight( 0x707070, 0.6, CELL * 0.6 );
			light.position.set( lightX, 95, lightZ );
			World.group.add( light );
			lights ++;

		}

	}

}

function buildMovingWalls( def, material, quality ) {

	if ( ! def.moving ) return;

	var geometry = new THREE.BoxBufferGeometry( CELL, WALL_HEIGHT, WallThickness,
		quality.wallSegments, quality.wallSegments, quality.wallSegments );
	World._disposables.push( geometry );

	for ( var i = 0; i < def.moving.length; i ++ ) {

		var spec = def.moving[ i ];
		var mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( spec.keys[ 0 ][ 1 ] * CELL, WALL_HEIGHT / 2, ( spec.line + 0.5 ) * CELL );
		World.group.add( mesh );

		World.movingWalls.push( mesh );
		World.movingKeys.push( spec.keys );
		World.movingColliders.push( new THREE.Box3().setFromObject( mesh ) );

	}

}

/* Faces the craft down the longest clear line of sight from its start cell. */
function startHeading( plan, r, c ) {

	var options = [
		{ dr: - 1, dc: 0, yaw: 90 },
		{ dr: 1, dc: 0, yaw: - 90 },
		{ dr: 0, dc: - 1, yaw: 0 },
		{ dr: 0, dc: 1, yaw: 180 }
	];

	var best = options[ 0 ];
	var bestRun = - 1;

	for ( var i = 0; i < options.length; i ++ ) {

		var o = options[ i ];
		var run = 0;
		var rr = r, cc = c;

		while ( run < 12 ) {

			var blocked = o.dc === 1 ? plan.hasV( 0, rr, cc ) :
				o.dc === - 1 ? plan.hasV( 0, rr, cc - 1 ) :
					o.dr === 1 ? plan.hasH( 0, rr, cc ) : plan.hasH( 0, rr - 1, cc );

			if ( blocked ) break;

			rr += o.dr;
			cc += o.dc;
			if ( plan.cellAt( 0, rr, cc ) === ' ' ) break;
			run ++;

		}

		if ( run > bestRun ) { bestRun = run; best = o; }

	}

	return best.yaw;

}

/* Builds a whole level. Call disposeLevel() before building another. */
function buildLevel( def, quality ) {

	disposeLevel();

	World.group = new THREE.Group();
	scene.add( World.group );

	World.ground = def.ground || 0;

	var plan = parseLevel( def );
	World.plan = plan;

	var ramps = findRamps( plan );
	World.ramps = ramps.runs;
	World.rampLookup = ramps.lookup;

	var theme = def.theme;

	// --- materials -------------------------------------------------------

	var textureWall = getTexture( 'data/stone.png' );
	textureWall.wrapS = THREE.MirroredRepeatWrapping;
	textureWall.wrapT = THREE.RepeatWrapping;
	// Walls are more than twice as tall as they used to be; keep the courses
	// square rather than stretching them up the storey.
	textureWall.repeat.set( 5, WALL_HEIGHT / 100 );
	textureWall.anisotropy = quality.anisotropy;
	textureWall.minFilter = quality.crunchyFilter ? THREE.NearestMipMapNearestFilter : THREE.LinearMipMapLinearFilter;

	var materialWall = new THREE.MeshLambertMaterial( { map: textureWall, color: theme.wall } );

	var textureFloor = getTexture( 'data/stone_floor.jpg' );
	textureFloor.wrapS = THREE.MirroredRepeatWrapping;
	textureFloor.wrapT = THREE.RepeatWrapping;
	textureFloor.repeat.set( 180, 180 );
	textureFloor.anisotropy = quality.anisotropy;
	textureFloor.minFilter = quality.crunchyFilter ? THREE.NearestMipMapNearestFilter : THREE.LinearMipMapLinearFilter;

	var materialFloor = new THREE.MeshLambertMaterial( { map: textureFloor, color: theme.floor } );

	// Decks share the ground's image but tile it per cell rather than per world.
	var textureDeck = textureFloor.clone();
	textureDeck.repeat.set( 3, 3 );
	textureDeck.needsUpdate = true;

	var materialDeck = new THREE.MeshLambertMaterial( { map: textureDeck, color: theme.wall } );

	// The plaza is one slab per cell, so it needs the deck's per-cell tiling
	// rather than the apron's one-tile-per-world mapping.
	var textureGround = textureFloor.clone();
	textureGround.repeat.set( 4, 4 );
	textureGround.needsUpdate = true;

	var materialGround = new THREE.MeshLambertMaterial( { map: textureGround, color: theme.floor } );

	World._disposables.push( materialWall, materialFloor, materialDeck, materialGround,
		textureDeck, textureGround );

	// --- walls, decks and paving ------------------------------------------

	var wallMerger = new Merger();
	buildWalls( plan, wallMerger, quality );

	var deckMerger = new Merger();
	var kerbMerger = new Merger();
	var groundMerger = new Merger();
	buildDecks( plan, deckMerger, kerbMerger, groundMerger );

	var apronMerger = new Merger();
	buildApron( plan, apronMerger );

	var wallMesh = new THREE.Mesh( wallMerger.build(), materialWall );
	wallMesh.frustumCulled = false;
	World.group.add( wallMesh );
	World._disposables.push( wallMesh.geometry );

	buildColliderIndex();

	if ( ! deckMerger.isEmpty() ) {

		var deckMesh = new THREE.Mesh( deckMerger.build(), materialDeck );
		deckMesh.frustumCulled = false;
		World.group.add( deckMesh );
		World._disposables.push( deckMesh.geometry );

	}

	// Paving and apron sit on their own layer so the map is not buried under a
	// sheet of ground, and use their own tiling: the plaza is built per cell,
	// the apron in four huge slabs.
	var groundMesh = new THREE.Mesh( groundMerger.build(), materialGround );
	groundMesh.frustumCulled = false;
	groundMesh.layers.set( GROUND_LAYER );
	World.group.add( groundMesh );
	World._disposables.push( groundMesh.geometry );

	var apronMesh = new THREE.Mesh( apronMerger.build(), materialFloor );
	apronMesh.frustumCulled = false;
	apronMesh.layers.set( GROUND_LAYER );
	World.group.add( apronMesh );
	World._disposables.push( apronMesh.geometry );

	if ( ! kerbMerger.isEmpty() ) {

		var materialKerb = new THREE.MeshLambertMaterial( {
			map: textureDeck,
			color: new THREE.Color( theme.wall ).multiplyScalar( 0.34 )
		} );

		var kerbMesh = new THREE.Mesh( kerbMerger.build(), materialKerb );
		kerbMesh.frustumCulled = false;
		World.group.add( kerbMesh );
		World._disposables.push( kerbMesh.geometry, materialKerb );

	}

	buildMovingWalls( def, materialWall, quality );
	buildDecals( def, plan, quality );

	// --- flags and start --------------------------------------------------

	for ( var f = 0; f < plan.floors; f ++ ) {

		for ( var r = 0; r < plan.rows; r ++ ) {

			for ( var c = 0; c < plan.cols; c ++ ) {

				var ch = plan.cellAt( f, r, c );

				if ( ch === 'F' ) {

					World.flags.push( { x: r * CELL, z: c * CELL, y: storeyY( f ), floor: f } );

				} else if ( ch === 'S' ) {

					World.start = {
						x: r * CELL, z: c * CELL, y: storeyY( f ), floor: f,
						heading: startHeading( plan, r, c )
					};

				}

			}

		}

	}

	World.bounds = new THREE.Box3(
		new THREE.Vector3( - CELL, storeyY( 0 ), - CELL ),
		new THREE.Vector3( plan.rows * CELL, storeyY( plan.floors ), plan.cols * CELL ) );

	return World.start;

}

function disposeLevel() {

	if ( World.group ) {

		scene.remove( World.group );
		World.group.traverse( function ( object ) {

			if ( object.geometry ) object.geometry.dispose();

		} );

	}

	for ( var i = 0; i < World._disposables.length; i ++ ) {

		var item = World._disposables[ i ];
		if ( item && item.dispose ) item.dispose();

	}

	World.group = null;
	World.colliders = [];
	World.normals = [];
	World.movingWalls = [];
	World.movingKeys = [];
	World.movingColliders = [];
	World.plan = null;
	World.ground = 0;
	World.ramps = [];
	World.rampLookup = null;
	World.flags = [];
	World.start = null;
	World._buckets = null;
	World._disposables = [];

}


/* --------------------------------------------------------------------------
	Collision
   ------------------------------------------------------------------------ */

/* Tests the craft against nearby walls. Returns the contact point and the
	surface normal to bounce off, or null when nothing was hit. */
var collideWorld = function () {

	var contact = { normal: new THREE.Vector3(), point: new THREE.Vector3() };
	var alongZ = new THREE.Vector3( 0, 0, 1 );

	function resolve( sphere, box, hint ) {

		contact.point.copy( sphere.center ).clamp( box.min, box.max );
		contact.normal.subVectors( sphere.center, contact.point );
		contact.normal.y = 0;

		if ( contact.normal.lengthSq() < 1e-6 ) {

			if ( ! hint ) return false;

			contact.normal.copy( hint );
			if ( sphere.center.dot( hint ) < contact.point.dot( hint ) ) contact.normal.negate();

		}

		contact.normal.normalize();
		return true;

	}

	return function collideWorld( sphere ) {

		var nearby = collidersNear( sphere.center );

		for ( var i = 0; i < nearby.length; i ++ ) {

			var index = nearby[ i ];
			if ( ! sphere.intersectsBox( World.colliders[ index ] ) ) continue;
			if ( resolve( sphere, World.colliders[ index ], World.normals[ index ] ) ) return contact;

		}

		for ( var j = 0; j < World.movingColliders.length; j ++ ) {

			if ( ! sphere.intersectsBox( World.movingColliders[ j ] ) ) continue;
			if ( resolve( sphere, World.movingColliders[ j ], alongZ ) ) return contact;

		}

		return null;

	};

}();
