/*!
 * Module dependencies.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* schema definition */
var ChannelSchema = new Schema({
    name: {type: String, default: '', trim: true},
    network: {type: mongoose.Schema.Types.ObjectId, ref: 'Network'}
});

/* validation */
ChannelSchema.path('name').required(true, 'Channel name cannot be empty');
ChannelSchema.path('network').required(true, 'Network cannot be empty');

mongoose.model('Channel', ChannelSchema);