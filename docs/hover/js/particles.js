/*
	A particle fountain drawn as a single THREE.Points object.

	The original version gave every particle its own Points object and its own
	material, which meant one draw call per particle. Here all particles of a
	fountain live in one buffer and fade by writing per-vertex colour, so a
	fountain costs a single draw call however many particles it has.
*/

function ParticleFountain( options ) {

	THREE.Points.call( this );

	var count = options.count;

	this.count = count;
	this.origin = options.origin.clone();
	this.startVelocity = options.velocity.clone();
	this.gravity = options.gravity !== undefined ? options.gravity : - 0.9;
	this.lifespan = options.lifespan !== undefined ? options.lifespan : 120;
	this.emitLoop = options.emitLoop !== undefined ? options.emitLoop : 0;
	this.systemDelay = options.delay !== undefined ? options.delay : 0;
	this.tint = new THREE.Color( options.color !== undefined ? options.color : 0xe39300 );

	this.systemAge = 0;
	this.emitTime = this.emitLoop;

	this.positions = new Float32Array( count * 3 );
	this.colors = new Float32Array( count * 3 );
	this.velocities = new Float32Array( count * 3 );
	this.ages = new Float32Array( count );
	this.delays = new Float32Array( count );

	var geometry = new THREE.BufferGeometry();
	geometry.setAttribute( 'position', new THREE.BufferAttribute( this.positions, 3 ) );
	geometry.setAttribute( 'color', new THREE.BufferAttribute( this.colors, 3 ) );

	// The fountain is always in view of the minimap camera, and its bounds
	// change every frame, so skip the culling test rather than recompute it.
	geometry.boundingSphere = new THREE.Sphere( this.origin.clone(), 4000 );

	this.geometry = geometry;
	this.frustumCulled = false;

	this.material = new THREE.PointsMaterial( {
		size: options.size !== undefined ? options.size : 14,
		map: options.map,
		vertexColors: true,
		transparent: true,
		depthWrite: false,
		blending: THREE.AdditiveBlending
	} );

	this.reset();

}

ParticleFountain.prototype = Object.create( THREE.Points.prototype );
ParticleFountain.prototype.constructor = ParticleFountain;

ParticleFountain.prototype.reset = function () {

	var speed = this.startVelocity.length();

	for ( var i = 0; i < this.count; i ++ ) {

		// Spread the particles through the stream so it looks continuous.
		this.delays[ i ] = ( i / this.count ) * this.lifespan * 0.2;
		this.ages[ i ] = 0;

		var jitter = ( speed + ( Math.random() - 0.5 ) / 10 ) / speed;

		this.velocities[ i * 3 ] = this.startVelocity.x * jitter + ( Math.random() - 0.5 ) * 2;
		this.velocities[ i * 3 + 1 ] = this.startVelocity.y * jitter;
		this.velocities[ i * 3 + 2 ] = this.startVelocity.z * jitter + ( Math.random() - 0.5 ) * 2;

		this.positions[ i * 3 ] = this.origin.x;
		this.positions[ i * 3 + 1 ] = this.origin.y;
		this.positions[ i * 3 + 2 ] = this.origin.z;

		this.colors[ i * 3 ] = 0;
		this.colors[ i * 3 + 1 ] = 0;
		this.colors[ i * 3 + 2 ] = 0;

	}

	this.geometry.attributes.position.needsUpdate = true;
	this.geometry.attributes.color.needsUpdate = true;

};

ParticleFountain.prototype.update = function ( delta ) {

	this.systemAge += delta;
	if ( this.systemAge < this.systemDelay ) return;

	var positions = this.positions;
	var colors = this.colors;
	var velocities = this.velocities;
	var accel = this.gravity * delta;

	for ( var i = 0; i < this.count; i ++ ) {

		this.ages[ i ] += delta;

		var age = this.ages[ i ] - this.delays[ i ];

		if ( age < 0 ) {

			colors[ i * 3 ] = colors[ i * 3 + 1 ] = colors[ i * 3 + 2 ] = 0;
			continue;

		}

		if ( age >= this.lifespan ) {

			// Recycle rather than remove, so the buffer never has to resize.
			this.ages[ i ] = this.delays[ i ];
			positions[ i * 3 ] = this.origin.x;
			positions[ i * 3 + 1 ] = this.origin.y;
			positions[ i * 3 + 2 ] = this.origin.z;
			velocities[ i * 3 + 1 ] = this.startVelocity.y;
			continue;

		}

		velocities[ i * 3 + 1 ] += accel;

		positions[ i * 3 ] += velocities[ i * 3 ] * delta;
		positions[ i * 3 + 1 ] += velocities[ i * 3 + 1 ] * delta;
		positions[ i * 3 + 2 ] += velocities[ i * 3 + 2 ] * delta;

		var fade = 1 - age / this.lifespan;
		colors[ i * 3 ] = this.tint.r * fade;
		colors[ i * 3 + 1 ] = this.tint.g * fade;
		colors[ i * 3 + 2 ] = this.tint.b * fade;

	}

	this.geometry.attributes.position.needsUpdate = true;
	this.geometry.attributes.color.needsUpdate = true;

};

ParticleFountain.prototype.dispose = function () {

	this.geometry.dispose();
	this.material.dispose();

};
