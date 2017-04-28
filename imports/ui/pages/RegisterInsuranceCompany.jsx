import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Accounts } from 'meteor/accounts-base';
import { Companies } from '../../api/companies.js';
import { browserHistory } from 'react-router';

import RegisterInsuranceCompanyForm from '../components/RegisterInsuranceCompanyForm.jsx';

class RegisterInsuranceCompany extends Component {
    createInsuranceCompany(event){
        event.preventDefault();

        const
            email = $('#email').val(),
            password = $('#password').val().trim(),
            confirm_password = $('#confirm-password').val().trim()
            companyName = $("#name").val(),
            phone = $("#phone").val()
            type = "insurance-company"
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
                        companyName: companyName,
                        phone: phone,
                        type: type
                    }
                },

                (error) => {
                    if (error) {
                        console.error("there was an error: ", error);
                    } else {
                        console.log('Insurance Company Registered Succesfully');
                    };
                }
            );

            Companies.insert({
                companyName: companyName,
                email: email,
                phone: phone,
            });

            Meteor.logout();

            browserHistory.push('/');
        }
    }
 
    render() {

        if (Meteor.user() !== undefined) {
            if (Meteor.user()) {
                if (Meteor.user().profile.type == 'admin') {
                    return (
                        <div className="row">
                            <h1 className="form_title">Register an Insurance Company</h1>
                            <RegisterInsuranceCompanyForm submitBtnLabel="Register"
                                                          submitAction={this.createInsuranceCompany}/>
                        </div>
                    );
                } else {
                    browserHistory.push('/forbidden');
                }
            }
        } else {
            return (
                <div className="row"></div>
            );
            browserHistory.push('/forbidden');
        }
    }
}

export default RegisterInsuranceCompany = createContainer(() => {
    Meteor.subscribe('companies');

    return {
        currentUser: Meteor.user(),
    };
}, RegisterInsuranceCompany);