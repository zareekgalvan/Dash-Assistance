import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Accounts } from 'meteor/accounts-base';
import { browserHistory } from 'react-router';

import RegisterAdminForm from '../components/RegisterAdminForm.jsx';

class RegisterAdmin extends Component {
    createAdmin(event){
        event.preventDefault();

        const
            email = $('#email').val(),
            password = $('#password').val().trim(),
            confirm_password = $('#confirm-password').val().trim()
            type = "admin"
            ;

        if (confirm_password !== password) {
            alert("Passwords do not match, please try again");

            $('#password').val("");
            $('#confirm-password').val("");
        } else {
            Accounts.createUser(
                {
                    email: email,
                    password: password,
                    profile : {
                        type: type
                    }
                },

                (error) => {
                    if (error) {
                        console.error("there was an error: ", error);
                    } else {
                        console.log('Administrator Registered Succesfully');
                    };
                }
            );

            Meteor.logout();

            browserHistory.push('/profile');

        }
    }
 
    render() {
        // if (Meteor.user() !== undefined) {
        //     if (Meteor.user()) {
        //         if (Meteor.user().profile.type == 'admin') {
                    return (
                        <div className="row">
                            <h1 className="form_title">Register an Administrator</h1>
                            <RegisterAdminForm submitBtnLabel="Register" submitAction={this.createAdmin}/>
                        </div>
                    );
    //             } else {
    //                 browserHistory.push('/forbidden');
    //             }
    //         }
    //     } else {
    //         return (
    //             <div classname="row"></div>
    //         );
    //         browserHistory.push('/forbidden');
    //     }
    }
}

export default RegisterAdmin = createContainer(() => {
    return {
        currentUser: Meteor.user(),
    };
}, RegisterAdmin);