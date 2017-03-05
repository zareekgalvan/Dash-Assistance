import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import LoginForm from '../components/LoginForm.jsx';

class Login extends Component {
    getRegisterLink() {
        let registerMsg = "Don't have an account?";
        return (
            <p>{registerMsg} <a href="/register">Register</a></p>
        );
    }

    loginWithPassword(event) {
        event.preventDefault();

        const email = $('#email').val(),
              password = $('#password').val().trim()
            ;

        Meteor.loginWithPassword(
            email,
            password
        , (error) => {
            if (error) {
                console.error('Login Error!!', error);
            } else {
                console.log('Login Successfully');
            }
        });
    }

    render() {
        return (
            <div className="row">
                    <h1>Login</h1>
                    <LoginForm submitBtnLabel="Login" submitAction={this.loginWithPassword}/>
                    {this.getRegisterLink()}
            </div>
        );
    }
}

export default Login