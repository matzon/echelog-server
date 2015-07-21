/*!
 * Module dependencies.
 */

var fs = require('fs');
var env = {};
var envFile = require('path').join(__dirname, 'env.json');

// read properties from externalized resource
if (fs.existsSync(envFile)) {
    env = fs.readFileSync(envFile, 'utf-8');
    env = JSON.parse(env);
    Object.keys(env).forEach(function (key) {
        process.env[key] = env[key];
    });
}

/*!
 * Module exports.
 */

module.exports = {
    db: process.env.MONGODB_TEST
};