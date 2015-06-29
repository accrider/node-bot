var irc = require('irc');

var client = new irc.Client("158.69.0.101", "HueBot", {
	channels: ['#deploy'],
});

client.addListener('message', function (from, to, message) {
    console.log(from + ' => ' + to + ': ' + message);
	client.say(to, message);
});