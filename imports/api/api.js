import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Requests } from '../api/requests.js';

export const Api = new Mongo.Collection('api');

Meteor.methods({
    'api.login'(data) {

        let username = data['username'];
        let password = data['password'];

        let user = Accounts.findUserByEmail(username);

        let result = Accounts._checkPassword(user, password);

        if (result['error']) {
        	result['userId'] = "";
		}

        return result;

    },

    'api.sendRequest'(data) {

        let userId = data['userId'];
        let latitude = data['latitude'];
        let longitude = data['longitude']

        let user = Meteor.users.findOne({_id: userId});
        let profile = user['profile'];

        let email = user['emails'][0]['address'];
        let accidentTime = new Date();

        let requestId = Requests.insert({
            name : profile['name'],
            phone: profile['phone'],
            email : email,
            city: profile['city'],
            state: profile['state'],
            insuranceCompany: profile['company'],
            policyNumber: profile['policy_number'],
            carBrand: profile['car_brand'],
            carModel: profile['car_model'],
            carYear: profile['car_year'],
            licensePlates: profile['license_plates'],
            notes: "",
            assignedEmployee: "none",
            accidentTime: accidentTime,
            status: 0,
            latitude: latitude,
            longitude: longitude
        });

        return requestId;
    }
});