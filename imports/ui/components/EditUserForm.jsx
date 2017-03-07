import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

class EditUserForm extends Component {
	render() {

		
		//let profile = this.props.userInfo.profile
		return (
			<form onSubmit={this.props.submitAction}>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <input type="text" id="address" className="form-control" value={this.props.userInfo} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City:</label>
                        <input type="text" id="city" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State:</label>
                        <input type="text" id="state" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input type="text" id="phone"  className="form-control" required/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="company">Ensurance Company:</label>
                        <input type="text" id="company" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="car-model">Car Model:</label>
                        <input type="text" id="car-model" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="car-name">Car Name:</label>
                        <input type="text" id="car-model" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="car-agency">Car Agency:</label>
                        <input type="text" id="car-agency" className="form-control" required/>
                    </div>
                </div>
                <div className="form-group">
                	<button type="submit" className="btn btn-primary col-md-1">Cancel</button>
                    <button type="submit" className="btn btn-primary col-md-1 col-md-offset-1">{this.props.submitBtnLabel}</button>
                </div>
            </form>
		);
	}
}

export default EditUserForm

EditUserForm.PropTypes = {
    submitAction: PropTypes.func.isRequired,
    userInfo: PropTypes.object.isRequired,
}