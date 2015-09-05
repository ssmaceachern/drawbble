/**
 * @author Sean
 */

var Ball = function(x, y){
	GameObject.call(this, x, y, 4, 4, "Ball");
	
	this.sprite = PS.imageLoad("ball.bmp", spriteLoader, 4);
	//PS.spriteMove("sprite_0", this.x, this.y);
	
	this.Gravity = 1;
	this.moveSpeed = 2;
};

var spriteLoader = function(image){
	
	//Load Ball Sprite
	var ball_sprite = PS.spriteImage(image);
	
	PS.spriteMove(ball_sprite, this.x, this.y);
	
	return ball_sprite;
};

GameObject.prototype.impart(Ball);

Ball.prototype.Draw = function(offsetX, offsetY)
{
	this.x = this.x + offsetX;
	this.y = this.y + offsetY;
	
	var loc = PS.spriteMove("sprite_0", this.x, this.y);
};

Ball.prototype.Update = function(){
	PS.debug("Ball Position x: " + this. x + ", y: " + this.y);
	
	if (this.time >= 0) {
		this.y += this.Gravity * this.time;
	}
};	