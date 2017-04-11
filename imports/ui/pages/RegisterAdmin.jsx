import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import RegisterAdminForm from '../components/RegisterAdminForm.jsx';

class RegisterAdmin extends Component {
    createAdmin(event){
        event.preventDefault();
        console.log("click!")
    }
 
    render() {
        return (
            <div className="row">
                    <h1 className="form_title">Register an Administrator</h1>
                    <RegisterAdminForm submitBtnLabel="Register" submitAction={this.createAdmin}/>
            </div>
        );
    }
}

export default RegisterAdmin