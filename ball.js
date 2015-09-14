/**
 * @author Sean
 */

var Ball = function(x, y){
	GameObject.call(this, x, y, 3, 3, "Ball");
	
	this.imageID = PS.imageLoad("ball.bmp", this.spriteLoader.bind(this), 4);
	
	this.Gravity = 1/30;
	
	this.xSpeed = 0;
	this.ySpeed = 1/30;
};

GameObject.prototype.impart(Ball);

Ball.prototype.Draw = function(offsetX, offsetY)
{
	//PS.debug(this.name + ": Draw Frame!\n");
	
	this.x = this.x + offsetX;
	this.y = this.y + offsetY;
	
	//this.sprite = PS.spriteImage(PS.imageLoad("ball.bmp", spriteLoader, 4));
	
	if(this.sprite != null){
		//PS.debug(this.sprite);
		var loc = PS.spriteMove(this.sprite, this.x, this.y);	
	}else{
		PS.imageLoad("ball.bmp", this.spriteLoader.bind(this), 4);
	}
};

Ball.prototype.Update = function(){
	//PS.debug(this.name + " Position x: " + this.x + ", y: " + this.y + "\n");
	
	if (this.time >= 0) {
		this.y += this.ySpeed;
		this.x += this.xSpeed;
	}
};	