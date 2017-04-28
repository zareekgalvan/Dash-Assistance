import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import LoginForm from '../components/LoginForm.jsx';
import { browserHistory } from 'react-router';

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
                    browserHistory.push("/profile");
                else if(Meteor.user()['profile']['type'] == 'insurance-company')
                    browserHistory.push("/showrequests");
                else if(Meteor.user()['profile']['type'] == 'admin')
                    browserHistory.push("/registerinsurancecompany");
            }
        });
    }


    render() {
        if (this.props.currentUser) {
            if(Meteor.user()['profile']['type'] == 'user')
                browserHistory.push("/profile");
            else if(Meteor.user()['profile']['type'] == 'insurance-company')
                browserHistory.push("/showrequests");
            else if(Meteor.user()['profile']['type'] == 'admin')
                browserHistory.push("/registerinsurancecompany");
        } else {
            return (
                <div className="middle_login_container">
                    <div className="login_container">
                        <div className="col-md-6">
                            <img src="images/green_logo.png" className="login_formLogo"></img>
                        </div>
                        <div className="col-md-6">
                            <LoginForm submitBtnLabel="Login" submitAction={this.loginWithPassword}
                                       registerLink={this.getRegisterLink()}/>
                        </div>
                    </div>
                </div>
            );
        }
    }
}


Login.PropTypes = {
    currentUser: PropTypes.object,
    companies: PropTypes.array.isRequired
};

export default Login = createContainer(() => {
    return {
        currentUser: Meteor.user(),
    };
}, Login);