/*
	Touch controls: a floating thumbstick that appears wherever the player's
	thumb lands in the control zone.

	Horizontal travel steers, vertical travel drives forward and back, both as
	analogue values so a light touch is a gentle turn. Written against pointer
	events so it also works with a mouse or stylus.
*/

function TouchControls( options ) {

	this.zone = options.zone;			// element that captures the drags
	this.stick = options.stick;			// visual base
	this.knob = options.knob;			// visual thumb

	this.radius = 62;					// travel of the knob, in CSS pixels
	this.deadZone = 0.12;

	this.steer = 0;						// -1 left .. 1 right
	this.throttle = 0;					// -1 reverse .. 1 forward
	this.active = false;

	this.pointerId = null;
	this.originX = 0;
	this.originY = 0;

	this._onDown = this._onDown.bind( this );
	this._onMove = this._onMove.bind( this );
	this._onUp = this._onUp.bind( this );

	this.zone.addEventListener( 'pointerdown', this._onDown );
	this.zone.addEventListener( 'pointermove', this._onMove );
	this.zone.addEventListener( 'pointerup', this._onUp );
	this.zone.addEventListener( 'pointercancel', this._onUp );
	this.zone.addEventListener( 'lostpointercapture', this._onUp );

}

TouchControls.prototype._onDown = function ( event ) {

	if ( this.pointerId !== null ) return;

	this.pointerId = event.pointerId;
	this.zone.setPointerCapture( event.pointerId );

	this.originX = event.clientX;
	this.originY = event.clientY;
	this.active = true;

	this.stick.style.left = event.clientX + 'px';
	this.stick.style.top = event.clientY + 'px';
	this.stick.classList.add( 'is-active' );

	this._place( 0, 0 );
	event.preventDefault();

};

TouchControls.prototype._onMove = function ( event ) {

	if ( event.pointerId !== this.pointerId ) return;

	var dx = event.clientX - this.originX;
	var dy = event.clientY - this.originY;

	var distance = Math.sqrt( dx * dx + dy * dy );

	if ( distance > this.radius ) {

		// Drag the origin along so the stick never feels stuck at full lock.
		var pull = ( distance - this.radius ) / distance;
		this.originX += dx * pull;
		this.originY += dy * pull;
		this.stick.style.left = this.originX + 'px';
		this.stick.style.top = this.originY + 'px';

		dx *= this.radius / distance;
		dy *= this.radius / distance;

	}

	this._place( dx, dy );
	event.preventDefault();

};

TouchControls.prototype._onUp = function ( event ) {

	if ( event.pointerId !== this.pointerId ) return;

	this.pointerId = null;
	this.active = false;
	this.steer = 0;
	this.throttle = 0;

	this.stick.classList.remove( 'is-active' );
	this.knob.style.transform = 'translate(-50%, -50%)';

};

TouchControls.prototype._place = function ( dx, dy ) {

	this.knob.style.transform = 'translate(-50%, -50%) translate(' + dx + 'px, ' + dy + 'px)';

	this.steer = this._shape( dx / this.radius );
	this.throttle = this._shape( - dy / this.radius );

};

/* Removes the dead zone and squares the response for finer small inputs. */
TouchControls.prototype._shape = function ( value ) {

	var sign = value < 0 ? - 1 : 1;
	var magnitude = Math.min( Math.abs( value ), 1 );

	if ( magnitude < this.deadZone ) return 0;

	magnitude = ( magnitude - this.deadZone ) / ( 1 - this.deadZone );

	return sign * magnitude * magnitude;

};

TouchControls.prototype.release = function () {

	if ( this.pointerId !== null ) {

		try {

			this.zone.releasePointerCapture( this.pointerId );

		} catch ( e ) { /* pointer already gone */ }

	}

	this._onUp( { pointerId: this.pointerId } );

};
