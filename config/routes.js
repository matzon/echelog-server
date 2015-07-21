/*!
 * Module dependencies.
 */
var networksController = require('../app/controllers/networks.js');

/*!
 * Module exports.
 */

module.exports = function (server) {
    server.post('networks', networksController.createNetwork);
    server.get('/networks', networksController.listNetworks);
    server.get('/networks/:id', networksController.findNetworksById);
    server.put('/network/:id', networksController.updateNetwork);
    server.del('/network/:id', networksController.removeNetwork);
};