﻿// game.js for Perlenspiel 3.2
//DRAWBBLE

//draws a line along the swiped mouse path

/*
Perlenspiel is a scheme by Professor Moriarty (bmoriarty@wpi.edu).
Perlenspiel is Copyright © 2009-15 Worcester Polytechnic Institute.
This file is part of Perlenspiel.

Perlenspiel is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Perlenspiel is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Lesser General Public License for more details.

You may have received a copy of the GNU Lesser General Public License
along with Perlenspiel. If not, see <http://www.gnu.org/licenses/>.

Perlenspiel uses dygraphs (Copyright © 2009 by Dan Vanderkam) under the MIT License for data visualization.
See dygraphs License.txt, <http://dygraphs.com> and <http://opensource.org/licenses/MIT> for more information.
*/

// The following comment lines are for JSLint. Don't remove them!

/*jslint nomen: true, white: true */
/*global PS */

// This is a template for creating new Perlenspiel games

// All of the functions below MUST exist, or the engine will complain!

// PS.init( system, options )
// Initializes the game
// This function should normally begin with a call to PS.gridSize( x, y )
// where x and y are the desired initial dimensions of the grid
// [system] = an object containing engine and platform information; see documentation for details
// [options] = an object with optional parameters; see documentation for details

var Game;
var Player;

PS.init = function( system, options ) {
	"use strict";

	// Use PS.gridSize( x, y ) to set the grid to
	// the initial dimensions you want (32 x 32 maximum)
	// Do this FIRST to avoid problems!
	// Otherwise you will get the default 8x8 grid
	
	Game = new Window(32, 32, PS.COLOR_WHITE);

	// Add any other initialization code you need here
	Player = new Ball(14,14);
	Game.addObject(Player);
	//Game.addObject(new Ball(14,14));

	//var Ball = PS.imageLoad("ball.bmp", spriteLoader, 4);

	//PS.color(PS.ALL, 0, PS.COLOR_BLACK);
	//PS.color(PS.ALL, 31, PS.COLOR_BLACK);
	//PS.color(0, PS.ALL, PS.COLOR_BLACK);
	//PS.color(31, PS.ALL, PS.COLOR_BLACK);
	
	Game.run();
	
	var tempspr_1, tempspr_2, tempspr_3, tempspr_4;
	var o;
	for (o=0; o < 32; o++){
		tempspr_1 = PS.spriteSolid(1,1);
		tempspr_2 = PS.spriteSolid(1,1);
		tempspr_3 = PS.spriteSolid(1,1);
		tempspr_4 = PS.spriteSolid(1,1);
		PS.spriteMove(tempspr_1, o, 0);
		PS.spriteMove(tempspr_2, o, 31);
		PS.spriteMove(tempspr_3, 0, o);
		PS.spriteMove(tempspr_4, 31, o);
		PS.data(o, 0, 0);
		PS.data(o, 31, 0);
		PS.data(0, o, 90);
		PS.data(31, o, 90);
		PS.spriteCollide(tempspr_1, collision);
		PS.spriteCollide(tempspr_2, collision);
		PS.spriteCollide(tempspr_3, collision);
		PS.spriteCollide(tempspr_4, collision);
	}
	
};	

// PS.touch ( x, y, data, options )
// Called when the mouse button is clicked on a bead, or when a bead is touched
// It doesn't have to do anything
// [x] = zero-based x-position of the bead on the grid
// [y] = zero-based y-position of the bead on the grid
// [data] = the data value associated with this bead, 0 if none has been set
// [options] = an object with optional parameters; see documentation for details

PS.touch = function( x, y, data, options ) {
	"use strict";

	// Uncomment the following line to inspect parameters
	// PS.debug( "PS.touch() @ " + x + ", " + y + "\n" );

	// Add code here for mouse clicks/touches over a bead
	
	//PS.color(x, y, PS.COLOR_RED);
};

// PS.release ( x, y, data, options )
// Called when the mouse button is released over a bead, or when a touch is lifted off a bead
// It doesn't have to do anything
// [x] = zero-based x-position of the bead on the grid
// [y] = zero-based y-position of the bead on the grid
// [data] = the data value associated with this bead, 0 if none has been set
// [options] = an object with optional parameters; see documentation for details

PS.release = function( x, y, data, options ) {
	"use strict";

	// Uncomment the following line to inspect parameters
	// PS.debug( "PS.release() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse button/touch is released over a bead
};

// PS.enter ( x, y, button, data, options )
// Called when the mouse/touch enters a bead
// It doesn't have to do anything
// [x] = zero-based x-position of the bead on the grid
// [y] = zero-based y-position of the bead on the grid
// [data] = the data value associated with this bead, 0 if none has been set
// [options] = an object with optional parameters; see documentation for details

PS.enter = function( x, y, data, options ) {
	"use strict";

	// Uncomment the following line to inspect parameters
	// PS.debug( "PS.enter() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse cursor/touch enters a bead
};

// PS.exit ( x, y, data, options )
// Called when the mouse cursor/touch exits a bead
// It doesn't have to do anything
// [x] = zero-based x-position of the bead on the grid
// [y] = zero-based y-position of the bead on the grid
// [data] = the data value associated with this bead, 0 if none has been set
// [options] = an object with optional parameters; see documentation for details

PS.exit = function( x, y, data, options ) {
	"use strict";

	// Uncomment the following line to inspect parameters
	// PS.debug( "PS.exit() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse cursor/touch exits a bead
};

// PS.exitGrid ( options )
// Called when the mouse cursor/touch exits the grid perimeter
// It doesn't have to do anything
// [options] = an object with optional parameters; see documentation for details

PS.exitGrid = function( options ) {
	"use strict";

	// Uncomment the following line to verify operation
	// PS.debug( "PS.exitGrid() called\n" );

	// Add code here for when the mouse cursor/touch moves off the grid
};

// PS.keyDown ( key, shift, ctrl, options )
// Called when a key on the keyboard is pressed
// It doesn't have to do anything
// [key] = ASCII code of the pressed key, or one of the following constants:
// Arrow keys = PS.ARROW_UP, PS.ARROW_DOWN, PS.ARROW_LEFT, PS.ARROW_RIGHT
// Function keys = PS.F1 through PS.F1
// [shift] = true if shift key is held down, else false
// [ctrl] = true if control key is held down, else false
// [options] = an object with optional parameters; see documentation for details

PS.keyDown = function( key, shift, ctrl, options ) {
	"use strict";

	// Uncomment the following line to inspect parameters
	//	PS.debug( "DOWN: key = " + key + ", shift = " + shift + "\n" );

	// Add code here for when a key is pressed
	
	switch (key){
		case PS.KEY_SPACE:
		{
			PS.color(PS.ALL, PS.ALL, PS.COLOR_WHITE);
			break;
		}
	}
};

// PS.keyUp ( key, shift, ctrl, options )
// Called when a key on the keyboard is released
// It doesn't have to do anything
// [key] = ASCII code of the pressed key, or one of the following constants:
// Arrow keys = PS.ARROW_UP, PS.ARROW_DOWN, PS.ARROW_LEFT, PS.ARROW_RIGHT
// Function keys = PS.F1 through PS.F12
// [shift] = true if shift key is held down, false otherwise
// [ctrl] = true if control key is held down, false otherwise
// [options] = an object with optional parameters; see documentation for details

PS.keyUp = function( key, shift, ctrl, options ) {
	"use strict";

	// Uncomment the following line to inspect parameters
	// PS.debug( "PS.keyUp(): key = " + key + ", shift = " + shift + ", ctrl = " + ctrl + "\n" );

	// Add code here for when a key is released
};

// PS.swipe ( data, options )
// Called when a mouse/finger swipe across the grid is detected
// It doesn't have to do anything
// [data] = an object with swipe information; see documentation for details
// [options] = an object with optional parameters; see documentation for details

PS.swipe = function( data, options ) {
	"use strict";

	// Uncomment the following block to inspect parameters

	/*
	 var len, i, ev;
	 PS.debugClear();
	 PS.debug( "PS.swipe(): start = " + data.start + ", end = " + data.end + ", dur = " + data.duration + "\n" );
	 len = data.events.length;
	 for ( i = 0; i < len; i += 1 ) {
	 ev = data.events[ i ];
	 PS.debug( i + ": [x = " + ev.x + ", y = " + ev.y + ", start = " + ev.start + ", end = " + ev.end +
	 ", dur = " + ev.duration + "]\n");
	 }
	 */

	// Add code here for when an input event is detected
	
	//calculates the line between the first and last beads that were swiped
	var newLine = new Array();
	newLine = PS.line(data.events[0].x, data.events[0].y, data.events[data.events.length - 1].x, data.events[data.events.length - 1].y);
	
	//calculate the angle of the line
	var angle;
	var p1x = newLine[0][0];
	var p1y = newLine[0][1];
	var p2x = newLine[newLine.length - 1][0];
	var p2y = newLine[newLine.length - 1][1];
	
	if ((p1x < p2x) && (p1y > p2y)){
		angle = ((Math.atan((p1y - p2y)/(p2x - p1x))) * (180/Math.PI)) * -1;
	}
	else if ((p1x > p2x) && (p1y < p2y)){
		angle = ((Math.atan((p2y - p1y)/(p1x - p2x))) * (180/Math.PI)) * -1;
	}
	else if ((p1x > p2x) && (p1y > p2y)){
		angle = (Math.atan((p1y - p2y)/(p1x - p2x))) * (180/Math.PI);
	}
	else if ((p1x < p2x) && (p1y < p2y)){
		angle = (Math.atan((p2y - p1y)/(p2x - p1x))) * (180/Math.PI);
	}
	else if (p1x == p2x){
		angle = 90;
	}
	else{
		angle = 0;
	}

	//draws the line
	var tempspr;
	var i;
	for (i=0; i < newLine.length; i++){
		if (newLine[i][0] < 0 || newLine[i][1] < 0){
			break;
		}
		else {
			//PS.color(newLine[i][0], newLine[i][1], PS.COLOR_BLACK);
			tempspr = PS.spriteSolid(1,1);
			PS.spriteMove(tempspr, newLine[i][0], newLine[i][1]);
			PS.data(newLine[i][0], newLine[i][1], angle);

			PS.spriteCollide(tempspr, collision);
			iscolliding = false;
		}
	}
};

var iscolliding = false;
//collision behavior
function collision(s1, p1, s2, p2, type){
	//PS.debug("In collision!\n");
	var s1_pos = PS.spriteMove(s1, PS.CURRENT, PS.CURRENT);
	var s2_pos = PS.spriteMove(s2, PS.CURRENT, PS.CURRENT);

	if (s1 == Player.sprite && !iscolliding){
		PS.debug("ball has collided 1\n");
		//change ball velocity
		if (Player.ySpeed > 0){
			if(PS.data(s2_pos.x, s2_pos.y) < 0){
			Player.xSpeed = -1;
			Player.ySpeed = 0;
			}
			else if((PS.data(s2_pos.x, s2_pos.y) > 0) && (PS.data(s2_pos.x, s2_pos.y) < 90)){
			Player.xSpeed = 1;
			Player.ySpeed = 0;
			}
			else if(PS.data(s2_pos.x, s2_pos.y) == 90){
			Player.xSpeed = (Player.xSpeed * -1);
			PS.debug("wall bounce\n");
			}
			else if(PS.data(s2_pos.x, s2_pos.y) == 0){
				Player.ySpeed = (Player.ySpeed * -1);
			}
		}
		else if(Player.ySpeed < 0){
			if(PS.data(s2_pos.x, s2_pos.y) < 0){
			Player.xSpeed = 1;
			Player.ySpeed = 0;
			}
			else if((PS.data(s2_pos.x, s2_pos.y) > 0) && (PS.data(s2_pos.x, s2_pos.y) < 90)){
			Player.xSpeed = -1;
			Player.ySpeed = 0;
			}
			else if(PS.data(s2_pos.x, s2_pos.y) == 90){
			Player.xSpeed = (Player.xSpeed * -1);
			}
			else if(PS.data(s2_pos.x, s2_pos.y) == 0){
				Player.ySpeed = (Player.ySpeed * -1);
			}
		}
		if (iscolliding == false){
		iscolliding = true;
		}
		return 1;
	}
	else if (s2 == Player.sprite && !iscolliding){
		PS.debug("\nball has collided 2\n");
		PS.debug(s1_pos.x + " , " + s1_pos.y + " , " + PS.data(s1_pos.x, s1_pos.y));

		//change ball velocity
		if (Player.ySpeed >= 0){
			if(PS.data(s1_pos.x, s1_pos.y) < 0){
			PS.debug("\nneg angle\n");
			Player.xSpeed = -1/30;
			Player.ySpeed = 0;
			}
			else if((PS.data(s1_pos.x, s1_pos.y) > 0) && (PS.data(s1_pos.x, s1_pos.y) < 90)){
			PS.debug("\npos angle\n");
			Player.xSpeed = 1/30;
			Player.ySpeed = 0;
			}
			else if(PS.data(s1_pos.x, s1_pos.y) == 90){
			PS.debug("\nwall bounce\n" + s1_pos.x + s1_pos.y + PS.data(s1_pos.x, s1_pos.y));
			Player.xSpeed = (Player.xSpeed * -1);
			iscolliding = true;
			}
			else if(PS.data(s1_pos.x, s1_pos.y) == 0){
				PS.debug("\nline bounce\n");
				Player.ySpeed = (Player.ySpeed * -1);
			}
		}
		else if(Player.ySpeed < 0){
			if(PS.data(s1_pos.x, s1_pos.y) < 0){
			Player.xSpeed = 1/30;
			Player.ySpeed = 0;
			}
			else if((PS.data(s1_pos.x, s1_pos.y) > 0) && (PS.data(s1_pos.x, s1_pos.y) < 90)){
			Player.xSpeed = -1/30;
			Player.ySpeed = 0;
			}
			else if(PS.data(s1_pos.x, s1_pos.y) == 90){
			Player.xSpeed = (Player.xSpeed * -1);
			}
			else if(PS.data(s1_pos.x, s1_pos.y) == 0){
				Player.ySpeed = (Player.ySpeed * -1);
			}
		}
		if (iscolliding == false){
		iscolliding = true;
		}
		return 1;
	}
	else{
	iscolliding = false;
	return PS.DEFAULT;
	}
}

// PS.input ( sensors, options )
// Called when an input device event (other than mouse/touch/keyboard) is detected
// It doesn't have to do anything
// [sensors] = an object with sensor information; see documentation for details
// [options] = an object with optional parameters; see documentation for details

PS.input = function( sensors, options ) {
	"use strict";

	// Uncomment the following block to inspect parameters
	/*
	PS.debug( "PS.input() called\n" );
	var device = sensors.wheel; // check for scroll wheel
	if ( device )
	{
		PS.debug( "sensors.wheel = " + device + "\n" );
	}
	*/
	
	// Add code here for when an input event is detected
};

