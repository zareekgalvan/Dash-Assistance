import { Mongo } from 'meteor/mongo';

export const Employees = new Mongo.Collection('employees');

if (Meteor.isServer) {
    Meteor.publish('employees', function tasksPublication() {
        return Employees.find({});
    })
}