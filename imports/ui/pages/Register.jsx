import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Accounts } from 'meteor/accounts-base';

import LoginRegisterForm from '../components/RegisterForm.jsx';

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
            password = $('#password').val().trim(),
            confirm_password = $('#confirm-password').val().trim(),
            name = $('#name').val(),
            address = $('#address').val(),
            city = $('#city').val(),
            state = $('#state').val(),
            phone = $('#phone').val(),
            company = $('#company').val(),
            car_model = $('#car-model').val(),
            car_name = $('#car-name').val(),
            car_agency = $('#car-agency').val()
            ;

        if (confirm_password !== password) {
            alert("Passwords do not match, please try again");

            $('#password').val("");
            $('#confirm-password').val("");
        } else {
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
    }

    render() {
        return (
            <div className="row">
                <h1>Register</h1>
                <RegisterForm submitBtnLabel="Register" submitAction={this.createUser}/>
                {this.getLoginLink()}
                {this.props.currentUser}
            </div>
        );
    }
}

Register.PropTypes = {
    currentUser: PropTypes.object,
};

export default Register = createContainer(() => {
    return {
        currentUser: Meteor.user(),
    };
}, Register);