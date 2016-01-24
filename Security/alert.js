var exports = module.exports = {};

var sms = "https://api.tropo.com/1.0/sessions?action=create&token=756541574a64664945617461686763776d577a6b55505375684a6579727268704e755a716d75446657434747";
var alerted = false;

// var copterface = require('copterface');

function alert() {
	var spawn = require('child_process').spawn
	spawn('open', [sms]);
}

exports = {
	warn: alert, 
	alertFlag: alerted
} 