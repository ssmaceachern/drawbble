/**
 * @author Sean
 */

/**
 * Controls the viewable region of the game. Also refreshes the Draw function and 
 * begins the update timer upon initialization.
 * @param {Object} width
 * @param {Object} height
 * @param {Object} color
 */
var Window = function(width, height, color)
{
	GameObject.call(this, 0, 0, width, height, "Window");
	this.color = color;
	
	PS.gridSize(this.w, this.h);
	PS.gridColor(this.color);
	
	this.UpdateLoop = null;
};

GameObject.prototype.impart(Window);

Window.prototype.run = function(){
	if(this.UpdateLoop == null){
		this.UpdateLoop = PS.timerStart(1, GameObject.prototype._tick.bind(this));
	}
};

Window.prototype.stop = function() {
	if (this.UpdateLoop !== null) {
		PS.timerStop(this.UpdateLoop);
		this.UpdateLoop = null;
	}
};

Window.prototype.Draw = function(offsetX, offsetY) {
	PS.color( PS.ALL, PS.ALL, this.color);
	PS.debug("Draw frame!\n");
};
