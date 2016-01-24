var exports = module.exports = {};
exports = {
	newDest: function(){
		curPos( x = (Math.Random() * 2 * max) - max, y = (Math.Random() * 2 * max) - max);
	}
	sensorReactions: function(l, r){
		if(l === 1 && r === 0){
			avoidRight();
		}
		if(l === 0 && r === 1){
			avoidLeft();
		}
		else{
			rotateRight();
		}
		updatePos();
	}
	updatePos: function(){
		var SAD = 0; 
		var height = 0;
		d = client.on('navdata'), function(data){
				tmp = json.parse(data);
				velocity = tmp.demo.velocity;
			}
		}
		deltaDistance = velocity * milliSec;
		updatePos(deltaDistance);
	}
	updateDir: function(deltaDistance){
		if(dir === NORTH){
			curPos(x, y += deltaDistance);
		}
		if(dir === SOUTH){
			curPos(x, y -= deltaDistance);
		}
		if(dir === EAST){
			curPos(x += deltaDistance, y);
		}
		if(dir === WEST){
			curPos(x -= deltaDistance, y);
		}
	}
	setTime: function(){
		miliSec = setTimeOut(startTime, 50);
	}
}
/* GLOBALS */
var dir = NORTH
var curPos(x, y);
var destPos(x, y);
var prevPos(x, y);
var FPS = 4;
var miliSec = 0;