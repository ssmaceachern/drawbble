/**
 * @author Sean
 */

/**
 * Line object
 * @param {Object} p1x
 * @param {Object} p2x
 * @param {Object} p1y
 * @param {Object} p2y
 */
var DrawLine = function(p1x, p2x, p1y, p2y){
	//calculate the angle of the line
	this.angle;
	this.p1x = p1x;
	this.p1y = p2x;
	this.p2x = p1y;
	this.p2y = p2y;
	
	if ((p1x < p2x) && (p1y > p2y)){
		this.angle = ((Math.atan((p1y - p2y)/(p2x - p1x))) * (180/Math.PI)) * -1;
	}
	else if ((p1x > p2x) && (p1y < p2y)){
		this.angle = ((Math.atan((p2y - p1y)/(p1x - p2x))) * (180/Math.PI)) * -1;
	}
	else if ((p1x > p2x) && (p1y > p2y)){
		this.angle = (Math.atan((p1y - p2y)/(p1x - p2x))) * (180/Math.PI);
	}
	else if ((p1x < p2x) && (p1y < p2y)){
		this.angle = (Math.atan((p2y - p1y)/(p2x - p1x))) * (180/Math.PI);
	}
	else if (p1x == p2x){
		this.angle = 90;
	}
	else{
		this.angle = 0;
	}
	
	this.isCollided = false;
	
	var newLine = PS.line(this.p1x, this.p1y, this.p2x, this.p2y);

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
			PS.data(newLine[i][0], newLine[i][1], this.angle);

			PS.spriteCollide(tempspr, this.collision.bind(this));
			this.isCollided = false;
		}
	}
};

GameObject.prototype.impart(DrawLine);

DrawLine.prototype.collision = function(object)
{
	
};
