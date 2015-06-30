var shell = require('shelljs')
module.exports = {
	main: function(client, channel, user, message) {
		client.say(channel, "I've been called!");
		var args = message.split(" ");
		if (args.length > 2) {
			switch (args[2]) {
				case 'status':
				var out = shell.exec('git status');
				client.say(channel, out.output);
				break;
			}
		}
	},
	load: function() {
		console.log("I've been loaded!");
	}
};