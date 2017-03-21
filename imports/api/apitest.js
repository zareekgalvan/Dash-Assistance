import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Tests = new Mongo.Collection('tests');

Meteor.methods({
	'tests.insert'(data) {
		Tests.insert(data);
		console.log(data);
	}
});