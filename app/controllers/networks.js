/*!
 * Module dependencies.
 */
var mongoose = require('mongoose');
var Network = mongoose.model('Network');

/*!
 * Module exports.
 */

/**
 * List all known networks
 */
exports.listNetworks = function (req, res, next) {
    Network.find({}, function (err, networks) {
        if (err) return next(err);
        res.json(networks);
        next();
    });
};

/**
 * Create a new Network from the body of the request
 */
exports.createNetwork = function (req, res, next) {
    var networkModel = new Network(req.body);
    networkModel.save(function () {
        res.json(req.body);
        next();
    });
};

/**
 * Find Network by id
 */
exports.findNetworksById = function (req, res, next) {
    var options = {
        criteria: {_id: req.params.id}
    };
    Network.findOne(options.criteria, function (err, networks) {
        if (err) return next(err);
        res.json(networks);
        next();
    });
};

/**
 * Update Network identified by id param, with values from request body
 */
exports.updateNetwork = function (req, res, next) {
    var options = {
        "new": true
    };
    Network.findOneAndUpdate({_id: req.params.id}, req.body, options, function (err, network) {
        if (err) return next(err);
        res.json(network);
        next();
    });
};

/**
 * Remove Network identified by id param
 */
exports.removeNetwork = function (req, res, next) {
    Network.findOneAndRemove({_id: req.params.id}, req.body, function (err, network) {
        if (err) return next(err);
        res.json(network);
        next();
    });
};