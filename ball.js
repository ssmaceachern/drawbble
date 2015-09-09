/**
 * @author Sean
 */

var Ball = function(x, y){
	GameObject.call(this, x, y, 4, 4, "Ball");
	
	this.imageID = PS.imageLoad("ball.bmp", spriteLoader, 4);
	//PS.spriteMove("sprite_0", this.x, this.y);
	
	this.Gravity = 1;
	this.moveSpeed = 2;

	this.xSpeed = 0;
	this.ySpeed = 0;
};

var spriteLoader = function(image){
	
	//Load Ball Sprite
	this.sprite = PS.spriteImage(image);
	
	PS.spriteMove(this.sprite, this.x, this.y);
	
	return this.sprite;
};

GameObject.prototype.impart(Ball);

Ball.prototype.Draw = function(offsetX, offsetY)
{
	PS.debug(this.name + ": Draw Frame!\n");
	
	this.x = this.x + offsetX;
	this.y = this.y + offsetY;
	
	this.sprite = PS.spriteImage(PS.imageLoad("ball.bmp", spriteLoader, 4));
	var loc = PS.spriteMove(this.sprite, this.x, this.y);
};

Ball.prototype.Update = function(){
	PS.debug(this.name + " Position x: " + this.x + ", y: " + this.y + "\n");
	
	if (this.time >= 0) {
		this.y += 1;
		this.x += this.xSpeed * this.time;
	}
};	