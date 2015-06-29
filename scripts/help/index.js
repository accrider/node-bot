module.exports = {
	main: function(client, channel, user, message) {
		client.say(channel, "This is a help export");
	},
	load: function() {
		console.log("Help is loaded");
	}
};