'use strict';

/*!
 * Module dependencies.
 */
var utils = require('../utils');
var mongoose = require('mongoose');
var LogEntry = mongoose.model('LogEntry');

/*!
 * Module exports.
 */

/**
 * List all LogEntries for a given Channel and Date
 */
exports.listLogEntriesByChannelAndDate = function (req, res, next) {

    // normalize input date to be start and end of day (of date given)
    var startInputDate = new Date(parseInt(req.params.date) || Date.now());
    startInputDate.setHours(0,0,0,0);

    var endInputDate = new Date(parseInt(req.params.date) || Date.now());
    endInputDate.setHours(23,59,59,999);

    var options = {
        criteria: {channel: req.params.channel, date: {$gte: startInputDate, $lte: endInputDate}}
    };

    LogEntry.find(options.criteria, function (err, logentries) {
        if (err) { return next(err); }
        res.json(logentries);
        next();
    });
};

/**
 * Create a new LogEntry from the body of the request
 */
exports.createLogEntry = function (req, res, next) {
    var logEntryModel = new LogEntry(req.body);
    utils.validateAndSave(res, next, logEntryModel, function (err) {
        if (err) { return next(err); }
        res.json(req.body);
        next();
    });
};