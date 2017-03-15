import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../api/employees.js';

import RegisterEmployeeForm from '../components/RegisterEmployeeForm.jsx';

class RegisterEmployee extends Component {
    createEmployee(event){
        event.preventDefault();

        const
            name = $("#name").val(),
            email = $("#email").val(),
            phone = $("#phone").val();

        Employees.insert({
            name : name,
            email: email,
            phone : phone
        });

        console.log(Employees.find({}).fetch());
    }
 
    render() {
        return (
            <div className="row">
                    <h1>Register an Employee</h1>
                    <RegisterEmployeeForm submitBtnLabel="Register" submitAction={this.createEmployee}/>
            </div>
        );
    }
}

RegisterEmployee.propTypes = {
    employees: PropTypes.array.isRequired,
};

export default RegisterEmployee = createContainer(() => {
    Meteor.subscribe('employees');

    return {
        employees: Employees.find({}).fetch(),
    };
}, RegisterEmployee);