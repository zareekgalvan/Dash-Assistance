import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../api/employees.js';
import { browserHistory } from 'react-router';

import RegisterEmployeeForm from '../components/RegisterEmployeeForm.jsx';

class RegisterEmployee extends Component {
    createEmployee(event){
        event.preventDefault();

        const
            name = $("#name").val(),
            email = $("#email").val(),
            phone = $("#phone").val();
            company = Session.get('companyName')

        Employees.insert({
            name : name,
            email: email,
            phone : phone,
            company : company
        });

        browserHistory.push('/showRequests');
    }
 
    render() {

        if (Meteor.user() !== undefined) {
            if (Meteor.user()) {
                if (Meteor.user().profile.type == 'insurance-company') {
                    return (
                        <div className="row">
                            <h1 className="form_title">Register an Employee</h1>
                            <RegisterEmployeeForm submitBtnLabel="Register" submitAction={this.createEmployee}/>
                        </div>
                    );
                } else {
                    browserHistory.push('/forbidden');
                    return (
                        <div className="row"></div>
                    );
                }
            }
        } else {
            browserHistory.push('/forbidden');
            return (
                <div className="row"></div>
            );
        }
    }
}

RegisterEmployee.propTypes = {
    employees: PropTypes.array.isRequired,
    currentUser: PropTypes.object,
};

export default RegisterEmployee = createContainer(() => {
    Meteor.subscribe('employees');

    return {
        employees: Employees.find({}).fetch(),
        currentUser: Meteor.user(),
    };
}, RegisterEmployee);