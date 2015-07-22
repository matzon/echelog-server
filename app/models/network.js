/*!
 * Module dependencies.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* schema definition */
var NetworkSchema = new Schema({
    name: {type: String, default: '', trim: true}
});

/* validation */
NetworkSchema.path('name').required(true, 'Network name cannot be empty');

mongoose.model('Network', NetworkSchema);