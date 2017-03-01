import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Accounts } from 'meteor/accounts-base';
import { browserHistory } from 'react-router';

import LoginRegisterForm from '../components/LoginRegisterForm.jsx';

class Register extends Component {
    getLoginLink() {
        let loginMsg = 'Already have an account?';

        return (
            <p>{loginMsg} <a href="/login">Sign In</a></p>
        );
    }

    createUser(event) {
        event.preventDefault();

        const
            email = $('#email').val(),
            password = $('#password').val().trim()
            ;

        Accounts.createUser(
            {
                email: email,
                password: password
            },

            (error) => {
                if (error) {
                    console.error("there was an error: ", error);
                } else {
                    console.log('User Creates Succesfully');
                };
            }
        );
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <h1>Register</h1>
                    <LoginRegisterForm submitBtnLabel="Register" submitAction={this.createUser}/>
                    {this.getLoginLink()}
                </div>
            </div>
        );
    }
}

export default Register