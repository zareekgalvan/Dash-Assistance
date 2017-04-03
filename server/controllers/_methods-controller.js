/**
 * Created by agvaldezc on 4/2/17.
 */
import { Meteor } from 'meteor/meteor';
import { Api } from '../../imports/api/api.js';

exports.helloworld = function(req, res, next) {
    res.status(200).json({
        message: "Hello world!"
    })
}
exports.saySomething = function(req, res, next) {
    res.status(200).json({
        message: "hi"
    })
}
exports.postSomething = function(req, res, next) {
    res.send({id: req.body.id, name: req.body.name, description: req.body.description});

    var Fiber = require('fibers');

    Fiber(function() {
        Meteor.call('tests.insert', {id: req.body.id, name: req.body.name, description: req.body.description});
    }).run();

    next();
}

exports.login = function(req, res, next) {

    var Fiber = require('fibers');

    Fiber(function() {
        var username = req.body.email;
        var digest = Package.sha.SHA256(req.body.password);
        var password = {digest: digest, algorithm: 'sha-256'};

        Meteor.call('api.login', {username: username, password: password},
            (error, result) => {
                if (error) {
                    res.json(error);
                } else {
                    //result['status'] = 0;
                    res.json(result);
                }
            });

        next();

    }).run();
}

exports.sendRequest = function (req, res, next) {
    var Fiber = require('fibers');

    Fiber(function() {
        Meteor.call('api.sendRequest', {userId: req.body.userId, latitude: req.body.latitude, longitude: req.body.longitude},
            (error, result) => {
                if (error) {
                    res.json(error);
                } else {
                    res.json({requestId: result});
                }
            });

        next();

    }).run();
}
