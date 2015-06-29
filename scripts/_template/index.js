module.exports = {
	main: function(client, channel, user, message) {
		client.say(channel, "I've been called!");
	},
	load: function() {
		console.log("I've been loaded!");
	}
};