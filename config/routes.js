/*!
 * Module dependencies.
 */
var networksController = require('../app/controllers/networks.js');
var channelsController = require('../app/controllers/channels.js');

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
};