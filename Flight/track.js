var exports = module.exports = {};

const tcardinal = [ "NORTH", "EAST", "SOUTH", "WEST" ] ;

var tdir = tcardinal[0];
var tcurPos = {x: 0, y: 0};
var tdestPos = {x: 0, y: 0};
var tprevPos = {x: 0, y: 0};
var tFPS = 4;
var tcurrMillisec = 0;
var theight = 0;
var tbatteryDying = false; 
var treachedX = false;
var treachedY = false;
var tavoiding = "NONE";
var tvelocity = 0.0;

exports.dir = tdir,
	exports.curPos = tcurPos,
	exports.destPos = tdestPos,
	exports.prevPos = tprevPos,
	exports.heightt = theight,
	exports.batteryDying = tbatteryDying,
	exports.reachedX = treachedX,
	exports.reachedY = treachedY,
	exports.avoiding = tavoiding,
	exports.velocity = tvelocity,

	exports.newDest = function(){
		min = -20;
		max = 20;
		curPos = {x: Math.floor((Math.random() * 2 * max) - max), y: Math.floor((Math.random() * 2 * max) - max)};
		currMillisec = 0;
	},

	exports.updatePos = function(){
		deltaDistance = velocity * milliSec;
		updateDir(deltaDistance);
	},

	exports.updateDir = function(deltaDistance){
		if(dir === NORTH){
			curPos.y += deltaDistance;
		}
		if(dir === SOUTH){
			curPos.y -= deltaDistance;
		}
		if(dir === EAST){
			curPos.x += deltaDistance;
		}
		if(dir === WEST){
			curPos.x -= deltaDistance;
		}
	},

	exports.startTime = function(){
		miliSec += 50;
		setTimeOut(startTime, 50);
	},

	exports.goHome = function(){
		destPos(x = 0, y = 0);
		prevPos = curPos;
		setHomeDir();
	},

	exports.setHomeDir = function(){
		if(0 < curPos.x && 0 < curPos.y){
			dir = cardinal[2];
		}
		if(0 < curPos.x && 0 > curPos.y){
			dir = cardinal[3];
		}
		if(0 > curPos.x && 0 > curPos.y){
			dir = cardinal[0];
		}
		if(0 > curPos.x && 0 < curPos.y){
			dir = cardinal[1];
		}		
	};



