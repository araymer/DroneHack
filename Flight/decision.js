
var exports = module.exports = {};


exports.data = function(client) {
	client.on('navdata', console.log);
}

exports.lightShow = function lightShow(client) {
	client.animateLeds('blinkOrange', 3, 15);
}
