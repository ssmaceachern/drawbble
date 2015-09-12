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
var DrawLine = function(p1x, p2x, p1y, p2y, PlayerRef){
	//calculate the angle of the line
	this.angle;
	this.p1x = p1x;
	this.p1y = p2x;
	this.p2x = p1y;
	this.p2y = p2y;
	
	this.line = new DoublyLinkedList();
	var Bead = function(sprite, angle){
		this.sprite = sprite;
		this.angle = angle;
	};
	
	this.player = PlayerRef;
	
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
			
			tempspr = PS.spriteSolid(1,1);
			PS.spriteMove(tempspr, newLine[i][0], newLine[i][1]);
			PS.data(newLine[i][0], newLine[i][1], this.angle);
			
			this.line.add(tempspr);
			
			for(i = 0; i < this.line.length(); ++i){
				PS.spriteCollide(this.line[i], this.collision.bind(this));	
			}
			
			this.isCollided = false;
		}
	}
};

GameObject.prototype.impart(DrawLine);

DrawLine.prototype.Update() = function(){
	
};

DrawLine.prototype.collision = function(s1, p1, s2, p2, type)
{
	
};

var DoublyLinkedList = function(){
	this._length = 0;
	this._head = null;
	this._tail = null;
};

DoublyLinkedList.prototype = {
		add: function(data){
			//Create a node to hold data
			var node = {
				data: data,
				next: null,
				prev: null
			};
			
			//Special case: No items in the list
			if(this._length == 0){
				this._head = node;
				this._tail = node;
			}else{
				//Attach to tail node
				this._tail.next = node;
				node.prev = this._tail;
				this._tail = node;
			}
			
			this._length++;
		},
		
		remove: function(index){
			//Check for out of bounds
			if(index > -1 && index < this._length){
				var current = this._head;
				i = 0;
				
				//Special case: Remove the first item
				if(index === 0){
					this._head = current.next;
					
					/*
					 * If there's only one item in the list and we remove it, 
					 * then this._head needs to be null. Therefore, 
					 * this._tail also needs to be null to destroy the list
					 */
					if(!this._head){
						this._tail = null;
					}else{
						this._head.prev = null;
					}
					//Special case: Remove the last item
				} else if (index === this._length - 1){
					current = this._tail;
					this._tail = current.prev;
					this._tail.next = null;
				} else {
					//Find the index
					while(i++ < index)
					{
						current = current.next;
					}
					
					//Skip over the item to remove
					current.prev.next = current.next;
				}
				
				this._length--;
				
				return current.data;
			} else {
				return null;
			}
		}
};
