exports.Module = Module;

function Module(name) {
	this.name = name;
	this.opt = {
		auto_load: false
	};
	console.log("Loading: " + name);
	var mod = require("./scripts/" + name + "/index.js");
	this.mod = mod;
	mod.load();
}

Module.prototype.main = function(client, channel, user, message) {
	this.mod.main(client, channel, user, message);
};