/*
	Drones: the wards' watch, patrolling the plaza on the later levels.

	They only ever run on the ground storey, cell to cell along the same open
	graph the craft uses, so they never cross a wall and never need a collider.
	That also makes the rooftops and the sunken passages worth something: the
	quick route across the middle of a ward is the one the drones are on.

	They are slower than the craft at full throttle, so a chase is always
	escapable - the cost of being caught is the spin-out and the points, not
	the drone itself.
*/

var DRONE_SPEED = 300;			// units per second; the craft tops out at 480
var DRONE_SIGHT = 2800;			// how far off a drone will notice the craft
var DRONE_GIVE_UP = 4200;		// and how far it will follow before losing you
var DRONE_REACH = 120;			// contact distance, in the horizontal plane
var DRONE_COOLDOWN = 2.5;		// seconds before the same drone can hit again

function DroneSwarm( count, start, seed ) {

	this.drones = [];
	this.group = new THREE.Group();
	this.markers = new THREE.Group();

	if ( ! count || ! World.plan ) return;

	var plan = World.plan;
	var ground = World.ground;
	var rand = seededRandom( seed * 2654435761 + 12345 );

	// Somewhere on the plaza, but not on top of the player's start.
	var spawns = [];

	for ( var r = 0; r < plan.rows; r ++ ) {

		for ( var c = 0; c < plan.cols; c ++ ) {

			if ( plan.cellAt( ground, r, c ) === ' ' ) continue;
			if ( RAMP_CHARS.indexOf( plan.cellAt( ground, r, c ) ) !== - 1 ) continue;
			if ( Math.abs( r - start.r ) + Math.abs( c - start.c ) < 6 ) continue;
			spawns.push( { r: r, c: c } );

		}

	}

	for ( var i = 0; i < count && spawns.length; i ++ ) {

		var pick = spawns.splice( Math.floor( rand() * spawns.length ), 1 )[ 0 ];
		this.drones.push( this._make( pick, rand ) );

	}

	scene.add( this.group );
	scene.add( this.markers );

}

DroneSwarm.prototype._make = function ( cell, rand ) {

	var body = new THREE.Mesh(
		new THREE.OctahedronBufferGeometry( 34, 0 ),
		new THREE.MeshLambertMaterial( { color: 0xc4342a, emissive: 0x400d08 } ) );

	var skirt = new THREE.Mesh(
		new THREE.CylinderBufferGeometry( 46, 28, 14, 8 ),
		new THREE.MeshLambertMaterial( { color: 0x2a2f38, emissive: 0x101318 } ) );
	skirt.position.y = - 26;

	var mesh = new THREE.Group();
	mesh.add( body, skirt );
	this.group.add( mesh );

	var marker = new THREE.Mesh(
		new THREE.CylinderBufferGeometry( 0, 62, 110, 3 ),
		new THREE.MeshBasicMaterial( { color: 0xff5140 } ) );
	marker.layers.set( MAP_LAYER );
	this.markers.add( marker );

	return {
		mesh: mesh,
		marker: marker,
		body: body,
		r: cell.r,
		c: cell.c,
		x: cell.r * CELL,
		z: cell.c * CELL,
		fromR: cell.r,
		fromC: cell.c,
		heading: { dr: 0, dc: 0 },
		bob: rand() * Math.PI * 2,
		cooldown: 0,
		chasing: false
	};

};

/* Can a drone cross from one cell to the next on the ground storey? */
DroneSwarm.prototype._open = function ( r, c, dr, dc ) {

	var plan = World.plan;
	var g = World.ground;

	if ( dc === 1 && plan.hasV( g, r, c ) ) return false;
	if ( dc === - 1 && plan.hasV( g, r, c - 1 ) ) return false;
	if ( dr === 1 && plan.hasH( g, r, c ) ) return false;
	if ( dr === - 1 && plan.hasH( g, r - 1, c ) ) return false;

	var ch = plan.cellAt( g, r + dr, c + dc );

	// Ramps and trench mouths are left to the player.
	return ch !== ' ' && RAMP_CHARS.indexOf( ch ) === - 1;

};

DroneSwarm.prototype._choose = function ( drone, player, chasing ) {

	var steps = [ [ 1, 0 ], [ - 1, 0 ], [ 0, 1 ], [ 0, - 1 ] ];
	var open = [];

	for ( var i = 0; i < steps.length; i ++ ) {

		if ( this._open( drone.r, drone.c, steps[ i ][ 0 ], steps[ i ][ 1 ] ) ) open.push( steps[ i ] );

	}

	if ( ! open.length ) return null;

	// Don't turn back on yourself unless there is nowhere else to go.
	var forward = open.filter( function ( s ) {

		return ! ( s[ 0 ] === - drone.heading.dr && s[ 1 ] === - drone.heading.dc );

	} );

	var choices = forward.length ? forward : open;

	if ( chasing ) {

		var best = null;
		var bestDistance = Infinity;

		for ( var j = 0; j < choices.length; j ++ ) {

			var x = ( drone.r + choices[ j ][ 0 ] ) * CELL;
			var z = ( drone.c + choices[ j ][ 1 ] ) * CELL;
			var d = ( x - player.x ) * ( x - player.x ) + ( z - player.z ) * ( z - player.z );

			if ( d < bestDistance ) { bestDistance = d; best = choices[ j ]; }

		}

		return best;

	}

	// Patrolling: hold a line where possible, so they sweep rather than jitter.
	var straight = choices.filter( function ( s ) {

		return s[ 0 ] === drone.heading.dr && s[ 1 ] === drone.heading.dc;

	} );

	if ( straight.length && Math.random() < 0.72 ) return straight[ 0 ];

	return choices[ Math.floor( Math.random() * choices.length ) ];

};

DroneSwarm.prototype.update = function ( delta, player, playerOnGround, mapSliceY ) {

	var groundY = storeyY( World.ground );

	for ( var i = 0; i < this.drones.length; i ++ ) {

		var drone = this.drones[ i ];

		if ( drone.cooldown > 0 ) drone.cooldown -= delta;

		var dx = player.x - drone.x;
		var dz = player.z - drone.z;
		var range = Math.sqrt( dx * dx + dz * dz );

		// Only the ground storey is theirs; climb a ramp and they lose interest.
		var visible = playerOnGround && range < ( drone.chasing ? DRONE_GIVE_UP : DRONE_SIGHT );
		drone.chasing = visible;

		var targetX = drone.r * CELL;
		var targetZ = drone.c * CELL;
		var toX = targetX - drone.x;
		var toZ = targetZ - drone.z;
		var remaining = Math.sqrt( toX * toX + toZ * toZ );

		var speed = DRONE_SPEED * ( drone.chasing ? 1.15 : 0.8 );
		var travel = speed * delta;

		if ( remaining <= travel ) {

			drone.x = targetX;
			drone.z = targetZ;

			var step = this._choose( drone, player, drone.chasing );

			if ( step ) {

				drone.heading = { dr: step[ 0 ], dc: step[ 1 ] };
				drone.r += step[ 0 ];
				drone.c += step[ 1 ];

			} else {

				drone.heading = { dr: 0, dc: 0 };

			}

		} else {

			drone.x += toX / remaining * travel;
			drone.z += toZ / remaining * travel;

		}

		drone.bob += delta * 2.4;

		drone.mesh.position.set( drone.x, groundY + 78 + Math.sin( drone.bob ) * 9, drone.z );
		drone.mesh.rotation.y += delta * ( drone.chasing ? 3.4 : 1.5 );
		drone.body.material.emissive.setHex( drone.chasing ? 0x8a1a10 : 0x400d08 );

		drone.marker.position.set( drone.x, mapSliceY, drone.z );

	}

};

/* The nearest drone in contact with the craft, or null. */
DroneSwarm.prototype.strike = function ( player, playerOnGround ) {

	if ( ! playerOnGround ) return null;

	for ( var i = 0; i < this.drones.length; i ++ ) {

		var drone = this.drones[ i ];
		if ( drone.cooldown > 0 ) continue;

		var dx = player.x - drone.x;
		var dz = player.z - drone.z;

		if ( dx * dx + dz * dz > DRONE_REACH * DRONE_REACH ) continue;

		drone.cooldown = DRONE_COOLDOWN;
		drone.chasing = false;
		return drone;

	}

	return null;

};

DroneSwarm.prototype.dispose = function () {

	function scrub( object ) {

		object.traverse( function ( child ) {

			if ( child.geometry ) child.geometry.dispose();
			if ( child.material ) child.material.dispose();

		} );

	}

	scene.remove( this.group );
	scene.remove( this.markers );
	scrub( this.group );
	scrub( this.markers );

	this.drones = [];

};
