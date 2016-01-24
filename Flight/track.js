var exports = module.exports = {};

var const NORTH = 1;
var const WEST = 2;
var const EAST = 3;
var const SOUTH = 4;

var manuever = "LANDED";
var dir = NORTH;
var curPos = {x: 0, y: 0};
var destPos = {x: 0, y: 0};
var prevPos = {x: 0, y: 0};
var FPS = 4;
var currMillisec = 0;
var height = 0;
var batteryDying = false; 
var reachedX = false;
var reachedY = false;


exports = {

	manuever: manuever,
	dir: dir,
	curPos: curPos,
	destPos: destPos,
	prevPos: prevPos,
	height: height,
	batteryDying: batteryDying,
	reachedX: reachedX,
	reachedY: reachedY,


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
	}
	setHomeDir: function(){
		if(0 < curPos.x && 0 < curPos.y){
			dir = SOUTH;
		}
		if(0 < curPos.x && 0 > curPos.y){
			dir = WEST;
		}
		if(0 > curPos.x && 0 > curPos.y){
			dir = NORTH;
		}
		if(0 > curPos.x && 0 < curPos.y){
			dir = EAST;
		}		
	}
}

d = client.on('navdata', function(data){
				tmp = json.parse(data);
				velocity = tmp.demo.velocity;
				batteryDying = tmp.droneState.lowBattery;
			}
		});

