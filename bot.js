var irc = require('irc');
var shell = require('shelljs')
var mod = require('./module.js');

//git submodule add REPO scripts/name

var name = 'HueBot';

var modules = [];
var default_modules = ['help'];

for (var index in default_modules) {
	modules[default_modules[index]] = new mod.Module(default_modules[index]);
}

var client = new irc.Client("158.69.0.101", name, {
	channels: ['#deploy']
});

client.addListener('message', function (from, to, message) {
    console.log(from + ' => ' + to + ': ' + message);
	var args = message.split(" ");
	if (args[0] === name) {
		if (args.length > 1) {
			var command = args[1];
			if (modules[command] === undefined) {
				client.say(to, "That command has not been implemented yet");
			} else {
				modules[command].main(client, to, from, message);
			}
		} else {
			client.say(to, "Help...");
		}
	}

});