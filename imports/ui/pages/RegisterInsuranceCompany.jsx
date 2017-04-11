import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import RegisterInsuranceCompanyForm from '../components/RegisterInsuranceCompanyForm.jsx';

class RegisterInsuranceCompany extends Component {
    createInsuranceCompany(event){
        event.preventDefault();
        console.log("click!")
    }
 
    render() {
        return (
            <div className="row">
                    <h1 className="form_title">Register an Insurance Company</h1>
                    <RegisterInsuranceCompanyForm submitBtnLabel="Register" submitAction={this.createInsuranceCompany}/>
            </div>
        );
    }
}

export default RegisterInsuranceCompany