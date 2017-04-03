import { Meteor } from 'meteor/meteor';
import { Tests } from '../../imports/api/apitest.js';
import { Accounts } from 'meteor/accounts-base';

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

  var email = req.body.email;
  var password = req.body.password;

  var Fiber = require('fibers');
  var json = "";

  Fiber(function() {
    var email = req.body.email;
    var digest = Package.sha.SHA256(req.body.password);
    var password = {digest: digest, algorithm: 'sha-256'};

    json = JSON.stringify(Meteor.users.find({}).fetch());

    var parsedJSON = JSON.parse(json);

    res.json(parsedJSON[0]);

  }).run();

  next();
}