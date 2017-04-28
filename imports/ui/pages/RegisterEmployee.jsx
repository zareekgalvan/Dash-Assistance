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
            company = Session.get('companyName')

        Employees.insert({
            name : name,
            email: email,
            phone : phone,
            company : company
        });

        $("#name").val("")
        $("#email").val("")
        $("#phone").val("")

        $("#register-alert").show()
    }

    closeAlert(){
        $("#register-alert").hide()
    }
 
    render() {
        return (
            <div className="row">
                    <div id="register-alert" className="alert alert-success alert-dismissable custom-alert">
                        <a onClick={this.closeAlert.bind(this)} className="close" data-dismiss="alert" aria-label="close">&times;</a>
                        <strong>Success!</strong> Registered a new employee.
                    </div>

                    <h1 className="form_title">Register an Employee</h1>
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