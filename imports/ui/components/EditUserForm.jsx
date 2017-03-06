import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

class EditUserForm extends Component {
	render() {
		return (
			<form onSubmit={this.props.submitAction}>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <input placeholder="Address" type="text" id="address" className="form-control" value={this.props.UserInfo['address']} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City:</label>
                        <input placeholder="City" type="text" id="city" className="form-control" value={this.props.UserInfo['city']} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State:</label>
                        <input placeholder="State" type="text" id="state" className="form-control" value={this.props.UserInfo['state']} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input placeholder="Phone" type="text" id="phone"  className="form-control" value={this.props.UserInfo['phone']} required/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="company">Ensurance Company:</label>
                        <input placeholder="Ensurance Company" type="text" id="company" className="form-control" value={this.props.UserInfo['company']} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="car-model">Car Model:</label>
                        <input placeholder="Car Model" type="text" id="car-model" className="form-control" value={this.props.UserInfo['car-model']} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="car-name">Car Name:</label>
                        <input placeholder="Car Name" type="text" id="car-model" className="form-control" value={this.props.UserInfo['car-name']} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="car-agency">Car Agency:</label>
                        <input placeholder="Car Agency" type="text" id="car-agency" className="form-control" value={this.props.UserInfo['car-agency']} required/>
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">{this.props.submitBtnLabel}</button>
                </div>
            </form>
		);
	}
}

export default EditUserForm

EditUserForm.PropTypes = {
    submitAction: PropTypes.func.isRequired,
}