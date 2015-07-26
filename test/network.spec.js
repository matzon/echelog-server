/* jshint -W030 */
var expect = require('chai').expect;

describe('Network model test', function () {
    'use strict';

    var mongoose = require('mongoose');
    var mockgoose = require('mockgoose');
    mockgoose(mongoose);
    mongoose.connect('mongodb://localhost');

    var NetworkModel = require('../app/models/network')(mongoose);

    beforeEach(function (done) {
        mockgoose.reset();
        done();
    });

    afterEach(function (done) {
        mockgoose.reset();
        done();
    });

    describe('Create', function () {
        it('should be able to create a model', function (done) {
            NetworkModel.create({name: 'test'}, function (err, models) {
                expect(err).to.be.null;
                expect(models).to.be.ok;
                done(err);
            });
        });

        it('should be able to find created entry', function (done) {
            NetworkModel.create({name: 'test'}, function (err, model) {
                expect(model).not.to.be.undefined;
                NetworkModel.findOne({_id: model._id}, function (err, result) {
                    expect(err).to.be.null;
                    expect(result.name).to.equals('test');
                    done(err);
                });
            });
        });
    });
});