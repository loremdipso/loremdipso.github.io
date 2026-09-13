/*
	Touch controls: a thumbstick fixed halfway up one edge of the screen so it
	is obvious how to drive, with direction arrows drawn on its base.

	The stick never moves while a finger is down. Its centre is the origin of
	every drag, so sliding the thumb up and down trims the speed without the
	base creeping along underneath. Touching the far half of the screen swaps
	the stick to that side, and it stays there until the other side is tapped.

	Horizontal travel steers, vertical travel drives forward and back, both as
	analogue values so a light touch is a gentle turn. Written against pointer
	events so it also works with a mouse or stylus.
*/

function TouchControls( options ) {

	this.zone = options.zone;			// element that captures the drags
	this.stick = options.stick;			// visual base
	this.knob = options.knob;			// visual thumb
	this.hint = options.hint || null;	// "drag to drive" label, hidden on first touch

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

	// A touch on the far side of the screen moves the stick over to that edge;
	// the stylesheet does the placing, we only flip the class.
	var onRight = event.clientX > window.innerWidth / 2;
	document.body.classList.toggle( 'stick-right', onRight );

	// Every drag is measured from the stick's centre, so a thumb landing on
	// the ▲ is instant thrust and one landing off the base is a rest position.
	var home = this.stick.getBoundingClientRect();
	this.originX = home.left + home.width / 2;
	this.originY = home.top + home.height / 2;

	this.active = true;
	this.stick.classList.add( 'is-active' );

	this.hideHint();
	this._place( event.clientX - this.originX, event.clientY - this.originY );
	event.preventDefault();

};

TouchControls.prototype._onMove = function ( event ) {

	if ( event.pointerId !== this.pointerId ) return;

	this._place( event.clientX - this.originX, event.clientY - this.originY );
	event.preventDefault();

};

TouchControls.prototype._onUp = function ( event ) {

	if ( event.pointerId !== this.pointerId ) return;

	this.pointerId = null;
	this.active = false;
	this.steer = 0;
	this.throttle = 0;

	this.stick.classList.remove( 'is-active', 'up', 'down', 'left', 'right' );
	this.knob.style.transform = 'translate(-50%, -50%)';

};

/* Pins the knob within its travel and reads the axes off it. */
TouchControls.prototype._place = function ( dx, dy ) {

	var distance = Math.sqrt( dx * dx + dy * dy );

	if ( distance > this.radius ) {

		dx *= this.radius / distance;
		dy *= this.radius / distance;

	}

	this.knob.style.transform = 'translate(-50%, -50%) translate(' + dx + 'px, ' + dy + 'px)';

	this.steer = this._shape( dx / this.radius );
	this.throttle = this._shape( - dy / this.radius );

	this.stick.classList.toggle( 'up', this.throttle > 0 );
	this.stick.classList.toggle( 'down', this.throttle < 0 );
	this.stick.classList.toggle( 'left', this.steer < 0 );
	this.stick.classList.toggle( 'right', this.steer > 0 );

};

/* Removes the dead zone and squares the response for finer small inputs. */
TouchControls.prototype._shape = function ( value ) {

	var sign = value < 0 ? - 1 : 1;
	var magnitude = Math.min( Math.abs( value ), 1 );

	if ( magnitude < this.deadZone ) return 0;

	magnitude = ( magnitude - this.deadZone ) / ( 1 - this.deadZone );

	return sign * magnitude * magnitude;

};

TouchControls.prototype.showHint = function () {

	if ( this.hint ) this.hint.classList.add( 'show' );

};

TouchControls.prototype.hideHint = function () {

	if ( this.hint ) this.hint.classList.remove( 'show' );

};

TouchControls.prototype.release = function () {

	if ( this.pointerId !== null ) {

		try {

			this.zone.releasePointerCapture( this.pointerId );

		} catch ( e ) { /* pointer already gone */ }

	}

	this._onUp( { pointerId: this.pointerId } );

};
