/*
	Keyframe helpers for the sliding walls.

	A track is an array of [ time, value ] pairs with time normalised to 0..1.
	Times must be sorted; the first and last value should match so the loop is
	seamless.
*/

function evaluateTrack( keys, t ) {

	if ( t <= keys[ 0 ][ 0 ] ) return keys[ 0 ][ 1 ];

	var last = keys.length - 1;
	if ( t >= keys[ last ][ 0 ] ) return keys[ last ][ 1 ];

	for ( var i = 0; i < last; i ++ ) {

		var a = keys[ i ];
		var b = keys[ i + 1 ];

		if ( t >= a[ 0 ] && t <= b[ 0 ] ) {

			var span = b[ 0 ] - a[ 0 ];
			var alpha = span === 0 ? 0 : ( t - a[ 0 ] ) / span;

			// Ease in and out so the walls feel driven rather than teleported.
			alpha = alpha * alpha * ( 3 - 2 * alpha );

			return a[ 1 ] + ( b[ 1 ] - a[ 1 ] ) * alpha;

		}

	}

	return keys[ last ][ 1 ];

}
