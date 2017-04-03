import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

class API {}

Meteor.methods({
   'api.login'(data) {

       var username = data['username'];
       var password = data['password'];

       Meteor.loginWithPassword(
           username,
           password
           , (error) => {
               if (error) {
                   console.error('Login Error!!', error);
               } else {
                   console.log(JSON.stringify(Meteor.user()));
               }
           }
       );
   }
});

export default API