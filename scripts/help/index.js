module.exports = {
	main: function(client, channel, user, message) {
		client.say(channel, "Usage: HueBot [command] [args]");
	},
	load: function() {
		console.log("Help is loaded");
	}
};