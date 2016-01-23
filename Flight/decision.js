
var exports = module.exports = {};

exports.data = function(client) {
	client.config('general:navdata_demo', 'TRUE');
}

exports.navdata = function navdata(client) {
	client.on('navdata', console.log);
}

exports.lightShow = function lightShow(client) {
	client.animateLeds('blinkOrange', 3, 15);
}
