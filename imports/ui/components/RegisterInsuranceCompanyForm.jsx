import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

export default class RegisterInsuranceCompanyForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.submitAction}>
                <div className="col-md-4"></div>
                <div className="col-md-4 custom_form">

                    <div className="form-group">
                        <input placeholder="Name" type="text" id="name" className="form-control" required/>
                    </div>

                    <div className="form-group">
                        <input placeholder="Email" type="email" id="email" className="form-control" required/>
                    </div>

                    <div className="form-group">
                        <input placeholder="Password" type="password" id="password" className="form-control" required/>
                    </div>

                    <div className="form-group">
                        <input placeholder="Confirm Password" type="password" id="confirm-password" className="form-control" required/>
                    </div>

                    <div className="form-group">
                        <input placeholder="Phone" type="tel" id="phone" className="form-control" required/>
                    </div>

                    <div className="col-md-4"></div>
                    <div className="form-group col-md-4">
                        <button type="submit" className="btn btn-primary btn-block submit_button">{this.props.submitBtnLabel}</button>
                    </div>
                </div>
            </form>
        );
    }
}

RegisterInsuranceCompanyForm.PropTypes = {
    submitAction: PropTypes.func.isRequired,
}