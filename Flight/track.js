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

exports = {

	dir: tdir,
	curPos: tcurPos,
	destPos: tdestPos,
	prevPos: tprevPos,
	height: theight,
	batteryDying: tbatteryDying,
	reachedX: treachedX,
	reachedY: treachedY,
	avoiding: tavoiding,
	velocity: tvelocity,

	newDest: function(){
		curPos = {x: Math.floor((Math.Random() * 2 * max) - max), y: Math.floor((Math.Random() * 2 * max) - max)};
		currMillisec = 0;
	},

	updatePos: function(){
		deltaDistance = velocity * milliSec;
		updateDir(deltaDistance);
	},

	updateDir: function(deltaDistance){
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

	startTime: function(){
		miliSec += 50;
		setTimeOut(startTime, 50);
	},

	goHome: function(){
		destPos(x = 0, y = 0);
		prevPos = curPos;
		setHomeDir();
	},

	setHomeDir: function(){
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
	}
}


