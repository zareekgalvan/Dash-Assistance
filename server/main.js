import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Companies } from '../imports/api/companies.js';
import '../imports/api/employees.js';
import '../imports/api/requests.js';
import '../imports/api/companies.js';
import '../imports/api/admins.js';

Meteor.methods({
    'register.admin'(data) {

        const email = data['email'];
        const password = data['password'];
        const type = data['type']

        Accounts.createUser(
            {
                email: email,
                password: password,
                profile : {
                    type: type
                }
            });
    },

    'register.insurance'(data) {

        const email = data['email'],
        password = data['password'],
        companyName = data['companyName'],
        phone = data['phone'],
        type = data['type'];

        Accounts.createUser(
            {
                email: email,
                password: password,
                profile : {
                    companyName: companyName,
                    phone: phone,
                    type: type
                }
            });

        Companies.insert({
            companyName: companyName,
            email: email,
            phone: phone,
        });
    }
});

Meteor.startup(() => {
  // code to run on server at startup
});
