var app = require('./app');
var config = require('./config');
var http = require('https://discord.com/oauth2/authorize?client_id=1367770333121216533&permissions=1759218604441591&response_type=code&redirect_uri=https%3A%2F%2Fdiscord.com%2Foauth2%2Fauthorize%3Fclient_id%3D1360981959345701174%26permissions%3D1759218604441591%26integration_type%3D0%26scope%3Dbot%2Bapplications.commands&integration_type=1&scope=applications.commands+bot+identify');

/**
 * Côté serveur web HTTP lançant la partie EXPRESS
 */
var server = http.createServer(app);
server.listen(config.port || 80, function() {
    console.log('Express server started on *:' + config.port);
});
