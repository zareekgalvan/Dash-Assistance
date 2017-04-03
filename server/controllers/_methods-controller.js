/**
 * Created by agvaldezc on 4/2/17.
 */
import { Meteor } from 'meteor/meteor';
import { Api } from '../../imports/api/apitest.js';

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

        /*json = JSON.stringify(Meteor.users.find({}).fetch());

        var parsedJSON = JSON.parse(json);

        res.json(parsedJSON[0]);*/

        next();

    }).run();
}
