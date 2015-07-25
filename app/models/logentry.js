/*!
 * Module exports.
 */

module.exports = function (mongoose) {
    var Schema = mongoose.Schema;

    /* schema definition */
    var LogEntrySchema = new Schema({
        date: {type: Date, default: Date.now},
        text: {type: String, default: '', trim: true},
        channel: {type: mongoose.Schema.Types.ObjectId, ref: 'Channel'}
    });

    /* validation */
    LogEntrySchema.path('date').required(true, 'Date cannot be empty');
    LogEntrySchema.path('channel').required(true, 'Channel cannot be empty');

    return mongoose.model('LogEntry', LogEntrySchema);
};