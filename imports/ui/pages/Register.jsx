import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Accounts } from 'meteor/accounts-base';
import { browserHistory } from 'react-router';

import RegisterForm from '../components/RegisterForm.jsx';

class Register extends Component {
    getLoginLink() {
        let loginMsg = 'Already have an account?';

        return (
            <p className="register_loginLink">{loginMsg} <a href="/login">Log In</a></p>
        );
    }

    getInsuranceCompanies() {
        let option1 = "HSBC";
        let option2 = "AXA";
        let option3 = "Banorte";

        return (
            <select class="form-control" id="sel1">
                <option>option1</option>
                <option>option2</option>
                <option>option3</option>
            </select>
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
            car_brand = $('#car-brand').val(),
            car_model = $('#car-model').val(),
            car_year = $('#car-year').val(),
            policy_number = $('#policy').val()
            license_plates = $('#license-plates').val(),
            type = "user",
            confirmed = "false"
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
                        name: name,
                        address: address,
                        city: city,
                        state: state,
                        phone: phone,
                        company: company,
                        car_brand: car_brand,
                        car_model: car_model,
                        car_year: car_year,
                        policy_number: policy_number,
                        license_plates: license_plates,
                        type: type,
                        confirmed: confirmed
                    }
                },

                (error) => {
                    if (error) {
                        console.error("there was an error: ", error);
                    } else {
                        console.log('User Created Succesfully');
                    };
                }
            );
        }
    }

    render() {

        if (this.props.currentUser) {
            let currentUserProfile = this.props.currentUser.profile;

            browserHistory.push('/profile');

        } else {
            return (
                <div className="row">
                    <h1 className="form_title">Register as a new user</h1>
                    <RegisterForm submitBtnLabel="Register" submitAction={this.createUser} loginLink={this.getLoginLink()} insuranceCompanies={this.getInsuranceCompanies()}/>
                </div>
            );
        }
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