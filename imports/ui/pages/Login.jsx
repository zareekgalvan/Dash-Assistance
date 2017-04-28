import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import LoginForm from '../components/LoginForm.jsx';

class Login extends Component {
    getRegisterLink() {
        let registerMsg = "Don't have an account?";
        return (
            <p className="login_registerLink">{registerMsg} <a href="/register">Register</a></p>
        );
    }

    loginWithPassword(event) {
        event.preventDefault();

        const username = $('#email').val(),
              password = $('#password').val().trim()
            ;

        Meteor.loginWithPassword(
            username,
            password
        , (error) => {
            if (error) {
                $("#password").addClass("error-credentials");
                $("#error-message").show();
            } else {
                if(Meteor.user()['profile']['type'] == 'user')
                    window.location.replace("/profile");
                else if(Meteor.user()['profile']['type'] == 'insurance-company')
                    window.location.replace("/showrequests");
                else if(Meteor.user()['profile']['type'] == 'admin')
                    window.location.replace("/registerinsurancecompany");
            }
        });
    }


    render() {
        return (
            <div className="middle_login_container">
              <div className="login_container">
                  <div className="col-md-6">
                      <img src="images/green_logo.png" className="login_formLogo"></img>  
                  </div>
                  <div className="col-md-6">
                      <LoginForm submitBtnLabel="Login" submitAction={this.loginWithPassword} registerLink={this.getRegisterLink()}/>
                  </div>
              </div>
          </div>
        );
    }
}

export default Login