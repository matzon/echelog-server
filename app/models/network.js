/*!
 * Module exports.
 */

module.exports = function (mongoose) {
    var Schema = mongoose.Schema;

    /* schema definition */
    var NetworkSchema = new Schema({
        name: {type: String, default: '', trim: true}
    });

    /* validation */
    NetworkSchema.path('name').required(true, 'Network name cannot be empty');

    return mongoose.model('Network', NetworkSchema);
};