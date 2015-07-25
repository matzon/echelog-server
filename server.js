/*!
 * Module dependencies.
 */
var pjson = require('./package.json');
var fs = require('fs');
var join = require('path').join;
var mongoose = require('mongoose');
var restify = require('restify');
var config = require('./config/config.js');

// hook up DB
var connect = function () {
    var options = {server: {socketOptions: {keepAlive: 1}}};
    mongoose.connect(config.db, options);
};
connect();

mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);

// configure restify
var server = restify.createServer({
    name: pjson.name,
    version: pjson.version
});

server.use(restify.bodyParser());
server.use(restify.acceptParser(server.acceptable));
server.use(restify.gzipResponse());

// bootstrap models
fs.readdirSync(join(__dirname, 'app/models')).forEach(function (file) {
    if (~file.indexOf('.js')) require(join(__dirname, 'app/models', file))(mongoose);
});

// setup routes
require('./config/routes.js')(server);

// start listening
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function () {
    var addr = server.address();
    console.log("%s (v%s) listening at %s", pjson.name, pjson.version, addr.address + ":" + addr.port);
});
 