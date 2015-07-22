/*!
 * Module dependencies.
 */
var utils = require('../utils')
var mongoose = require('mongoose');
var Channel = mongoose.model('Channel');

/*!
 * Module exports.
 */

/**
 * List all known channels
 */
exports.listChannels = function (req, res, next) {
    Channel.find({}, function (err, channels) {
        if (err) return next(err);
        res.json(channels);
        next();
    });
};

/**
 * Create a new Channel from the body of the request
 */
exports.createChannel = function (req, res, next) {
    var channelModel = new Channel(req.body);
    utils.validateAndSave(res, next, channelModel, function(err) {
        if (err) return next(err);
        res.json(req.body);
        next();
    });
};

/**
 * Find Channel by id
 */
exports.findChannelById = function (req, res, next) {
    var options = {
        criteria: {_id: req.params.id}
    };
    Channel.findOne(options.criteria, function (err, channel) {
        if (err) return next(err);
        res.json(channel);
        next();
    });
};

/**
 * Update Channel identified by id param, with values from request body
 */
exports.updateChannel = function (req, res, next) {
    var options = {
        "new": true
    };
    Channel.findOneAndUpdate({_id: req.params.id}, req.body, options, function (err, channel) {
        if (err) return next(err);
        res.json(channel);
        next();
    });
};

/**
 * Remove Channel identified by id param
 */
exports.removeChannel = function (req, res, next) {
    Channel.findOneAndRemove({_id: req.params.id}, req.body, function (err, channel) {
        if (err) return next(err);
        res.json(channel);
        next();
    });
};