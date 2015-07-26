'use strict';

/*!
 * Module dependencies.
 */

/**
 * Sends any validation errors
 */
function sendValidationErrors(res, validationErrors) {
    var errors = [];
    for (var ve in validationErrors.errors) {
        errors.push({"property": ve, "message": validationErrors.errors[ve].message});
    }
    res.send(500, {"message": validationErrors.message, "errors": errors});
}

/**
 * Validates and saves the model
 */
function validateAndSave(res, next, model, cb) {
    model.validate(function (validationErrors) {
        if (validationErrors) {
            sendValidationErrors(res, validationErrors);
            next();
        } else {
            model.save(cb);
        }
    });
}

/*!
 * Module exports.
 */

module.exports = {
    sendValidationErrors: sendValidationErrors,
    validateAndSave: validateAndSave
};
