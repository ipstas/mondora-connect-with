Package.describe({
	summary: "Connect other oauth accounts with an existing one",
	version: "0.1.0",
	git: "https://github.com/mondora/mondora-connect-with.git"
});

Package.onUse(function (api) {
	api.versionsFrom("METEOR@0.9.0");
	var serverDeps = [
		"oauth",
		"oauth-encryption"
	];
	api.use(serverDeps, "server");
	var clientDeps = [
		"accounts-oauth"
	];
	api.use(clientDeps, "client");
	api.addFiles("server.js", "server");
	api.addFiles("client.js", "client");
});
