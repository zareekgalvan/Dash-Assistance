import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import RegisterEmployeeForm from '../components/RegisterEmployeeForm.jsx';

class RegisterEmployee extends Component {
    registerEmployeeEvent(event){
        event.preventDefault();
        console.log("yay");
    }

    render() {
        return (
            <div className="row">
                    <h1>Register an Employee</h1>
                    <RegisterEmployeeForm submitBtnLabel="Register" submitAction={this.registerEmployeeEvent}/>
            </div>
        );
    }
}

export default RegisterEmployee