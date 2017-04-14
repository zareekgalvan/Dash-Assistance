import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

class RegisterForm extends Component {
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
                        <label htmlFor="password">Password:</label>
                        <input placeholder="Password" type="password" id="password" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm password:</label>
                        <input placeholder="Confirm Password" type="password" id="confirm-password" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input placeholder="Phone" type="text" id="phone"  className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <input placeholder="Address" type="text" id="address" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City:</label>
                        <input placeholder="City" type="text" id="city" className="form-control" required/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="state">State:</label>
                        <input placeholder="State" type="text" id="state" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="company">Insurance Company:</label>
                        <select className="form-control" id="company" required>
                            <option value ="">Insurance Company</option>
                            {this.props.insuranceCompanies}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="policy">Policy Number:</label>
                        <input placeholder="Policy Number" type="text" id="policy" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="car-brand">Car Brand:</label>
                        <input placeholder="Car Brand" type="text" id="car-brand" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="car-model">Car Model:</label>
                        <input placeholder="Car Model" type="text" id="car-model" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="car-year">Car Year:</label>
                        <input placeholder="Car Year" type="text" id="car-year" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="license-plates">License Plates:</label>
                        <input placeholder="License Plates" type="text" id="license-plates" className="form-control" required/>
                    </div>
                </div>

                <div className="col-md-6"></div>
                <div className="col-md-6">{this.props.loginLink}</div>

                <div className="col-md-4"></div>
                <div className="form-group col-md-4">
                    <button type="submit" className="btn btn-primary btn-block submit_button">{this.props.submitBtnLabel}</button>
                </div>
            </form>
        )
    }
}

export default RegisterForm

RegisterForm.PropTypes = {
    submitAction: PropTypes.func.isRequired,
}