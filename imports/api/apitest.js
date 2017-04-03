import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

export const Api = new Mongo.Collection('api');

Meteor.methods({
    'api.login'(data) {

        var username = data['username'];
        var password = data['password'];

        var user = Accounts.findUserByEmail(username);

        var result = Accounts._checkPassword(user, password);

        if (result['error']) {
        	result['userId'] = "";
		}

        return result;

    }
});