import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

class RegisterForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.submitAction}>
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="form-group">
                        <input placeholder="Name" type="text" id="name" className="form-control" required/>
                    </div>
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-12"></div>

                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="form-group">
                        <input placeholder="Email" type="email" id="email" className="form-control" required/>
                    </div>
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-12"></div>

                <div className="col-md-3"></div>
                <div className="col-md-3">
                    <div className="form-group">
                        <input placeholder="Password" type="password" id="password" className="form-control" required/>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <input placeholder="Confirm Password" type="password" id="confirm-password" className="form-control" required/>
                    </div>
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-12"></div>

                <div className="col-md-3"></div>
                <div className="col-md-3">
                    <div className="form-group">
                        <select className="form-control" id="company" required>
                            <option className="defaultOption" defaultValue value="">Select an Insurance Company</option>
                            {this.props.insuranceCompanies}
                        </select>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <input placeholder="Policy Number" type="text" id="policy" className="form-control" required/>
                    </div>
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-12"></div>

                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="form-group">
                        <input placeholder="Address" type="text" id="address" className="form-control" required/>
                    </div>
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-12"></div>

                <div className="col-md-3"></div>
                <div className="col-md-3">
                    <div className="form-group">
                        <input placeholder="City" type="text" id="city" className="form-control" required/>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <input placeholder="State" type="text" id="state" className="form-control" required/>
                    </div>
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-12"></div>

                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="form-group">
                        <input placeholder="Phone" type="text" id="phone"  className="form-control" required/>
                    </div>
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-12"></div>

                <div className="col-md-3"></div>
                <div className="col-md-3">
                    <div className="form-group">
                        <input placeholder="Car Brand" type="text" id="car-brand" className="form-control" required/>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <input placeholder="Car Model" type="text" id="car-model" className="form-control" required/>
                    </div>
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-12"></div>

                <div className="col-md-3"></div>
                <div className="col-md-3">
                    <div className="form-group">
                        <input placeholder="Car Year" type="text" id="car-year" className="form-control" required/>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <input placeholder="License Plates" type="text" id="license-plates" className="form-control" required/>
                    </div>
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-12"></div>

                <div className="col-md-3"></div>
                <div className="col-md-6">{this.props.loginLink}</div>

                <div className="col-md-4"></div>
                <div className="form-group col-md-4">
                    <button type="submit" className="btn btn-primary btn-block submit_button">{this.props.submitBtnLabel}</button>
                </div>

                {/*<div className="col-md-6">
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
                        <input placeholder="Phone" type="text" id="phone"  className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <input placeholder="Address" type="text" id="address" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <input placeholder="City" type="text" id="city" className="form-control" required/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <input placeholder="State" type="text" id="state" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <select className="form-control" id="company" required>
                            <option className="defaultOption" defaultValue value="">Select an Insurance Company</option>
                            {this.props.insuranceCompanies}
                        </select>
                    </div>
                    <div className="form-group">
                        <input placeholder="Policy Number" type="text" id="policy" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <input placeholder="Car Brand" type="text" id="car-brand" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <input placeholder="Car Model" type="text" id="car-model" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <input placeholder="Car Year" type="text" id="car-year" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <input placeholder="License Plates" type="text" id="license-plates" className="form-control" required/>
                    </div>
                </div>

                <div className="col-md-6"></div>
                <div className="col-md-6">{this.props.loginLink}</div>

                <div className="col-md-4"></div>
                <div className="form-group col-md-4">
                    <button type="submit" className="btn btn-primary btn-block submit_button">{this.props.submitBtnLabel}</button>
                </div>*/}
            </form>
        )
    }
}

export default RegisterForm

RegisterForm.PropTypes = {
    submitAction: PropTypes.func.isRequired,
}