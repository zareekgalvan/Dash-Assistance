import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

class RegisterEmployeeForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.submitAction}>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input placeholder="Name" type="text" id="name" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input placeholder="Email" type="email" id="email" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Phone:</label>
                        <input placeholder="Phone" type="tel" id="phone" className="form-control" required/>
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">{this.props.submitBtnLabel}</button>
                </div>
            </form>
        );
    }
}

export default RegisterEmployeeForm;

RegisterEmployeeForm.PropTypes = {
    submitAction: PropTypes.func.isRequired,
}