var autonomy = require('ardrone-autonomy');
var arDrone = require('ar-drone');
var mission  = autonomy.createMission();
mission.takeoff()
        .wait(2000)
       .zero()
       .altitude(3)
       .go({x: 2, y: 2})
       .hover(1000)
	   .go({x: 2, y: -2})
     .hover(1000)
	   .go({x: -2, y: -2})
     .hover(1000)
     .go({x: -2, y: 2})
     .hover(1000)
     .go({x: 0, y: 0})
     .hover(1000)
	   .land();
mission.run(function (err, result) {
    if (err) {
        console.trace("Oops, something bad happened: %s", err.message);
        mission.client().stop();
        mission.client().land();
    } else {
        console.log("Mission success!");
        process.exit(0);
    }
});
