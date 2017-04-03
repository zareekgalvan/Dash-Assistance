import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Requests = new Mongo.Collection('requests');

if (Meteor.isServer) {
    Meteor.publish('requests', function tasksPublication() {
        return Requests.find({user});
    })
}