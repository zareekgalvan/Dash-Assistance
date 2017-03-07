import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

class EditUserForm extends Component {

	render() {
        if (this.props.currentUser) {

            return (
                <form onSubmit={this.props.submitAction}>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="address">Address:</label>
                            <input placeholder="Address" type="text" id="address" defaultValue={this.props.currentUser.profile.address} className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City:</label>
                            <input placeholder="City" type="text" id="city" defaultValue={this.props.currentUser.profile.city} className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="state">State:</label>
                            <input placeholder="State" type="text" id="state" defaultValue={this.props.currentUser.profile.state} className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone:</label>
                            <input placeholder="Phone" type="text" id="phone" defaultValue={this.props.currentUser.profile.phone} className="form-control" required/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="company">Ensurance Company:</label>
                            <input placeholder="Ensurance Company" type="text" id="company" defaultValue={this.props.currentUser.profile.company} className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="car-model">Car Model:</label>
                            <input placeholder="Car Model" type="text" id="car-model" defaultValue={this.props.currentUser.profile.car_model} className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="car-name">Car Name:</label>
                            <input placeholder="Car Name" type="text" id="car-name" defaultValue={this.props.currentUser.profile.car_name} className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="car-agency">Car Agency:</label>
                            <input placeholder="Car Agency" type="text" id="car-agency" defaultValue={this.props.currentUser.profile.car_agency} className="form-control" required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">{this.props.submitBtnLabel}</button>
                    </div>
                    <div className="form-group">
                        <a href="/profile">Return to profile.</a>
                    </div>
                </form>
            );
        } else {
            return (
                <h1>LOADING...</h1>
            );
        }
    }
}

EditUserForm.PropTypes = {
    submitAction: PropTypes.func.isRequired,
    currentUser: PropTypes.object,
}

export default EditUserForm = createContainer(() => {
    return {
        currentUser: Meteor.user(),
    };
}, EditUserForm);