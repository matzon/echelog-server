'use strict';

/*!
 * Module dependencies.
 */
var networksController      = require('../app/controllers/networks');
var channelsController      = require('../app/controllers/channels');
var logEntriesController    = require('../app/controllers/logentries');

/*!
 * Module exports.
 */

module.exports = function (server) {
    server.post('/networks', networksController.createNetwork);
    server.get('/networks', networksController.listNetworks);
    server.get('/networks/:id', networksController.findNetworksById);
    server.put('/network/:id', networksController.updateNetwork);
    server.del('/network/:id', networksController.removeNetwork);

    server.post('/channels', channelsController.createChannel);
    server.get('/channels', channelsController.listChannels);
    server.get('/channels/:id', channelsController.findChannelById);
    server.put('/channel/:id', channelsController.updateChannel);
    server.del('/channel/:id', channelsController.removeChannel);

    server.post('/logs', logEntriesController.createLogEntry);
    server.get('/logs/:channel/:date', logEntriesController.listLogEntriesByChannelAndDate);

};