/**
 * Created by agvaldezc on 4/27/17.
 */

import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

export const Admins = new Mongo.Collection('admins');
//
// Meteor.methods({
//     'register.admin'(data) {
//
//         const email = data['email'];
//         const password = data['password'];
//         const type = data['type']
//
//         let result = Accounts.createUser(
//             {
//                 email: email,
//                 password: password,
//                 profile : {
//                     type: type
//                 }
//             },
//
//             (error) => {
//                 if (error) {
//                     console.error("there was an error: ", error);
//                 } else {
//                     console.log('Administrator Registered Succesfully');
//                 };
//             }
//         );
//
//         return result;
//     }
// });


