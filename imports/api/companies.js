import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Companies = new Mongo.Collection('companies');

if (Meteor.isServer) {
    Meteor.publish('companies', function tasksPublication() {
        return Companies.find({});
    })
}