import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

class CreateRequestForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.submitAction}>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input placeholder="Name" type="text" id="name" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input placeholder="Phone" type="text" id="phone"  className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">Email:</label>
                        <input placeholder="Email" type="text" id="email" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Accident Address:</label>
                        <input placeholder="Accident Address" type="text" id="accident-address" className="form-control" required/>
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
                        <input placeholder="Insurance Company" type="text" id="insurance-company" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Policy Number:</label>
                        <input placeholder="Policy Number" type="text" id="policy-number" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="car-model">Car Brand:</label>
                        <input placeholder="Car Brand" type="text" id="car-brand" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="car-name">Car Model:</label>
                        <input placeholder="Car Model" type="text" id="car-model" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="car-name">Notes:</label>
                        <input placeholder="Notes" type="text" id="notes" className="form-control" required/>
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">{this.props.submitBtnLabel}</button>
                </div>
            </form>
        )
    }
}

export default CreateRequestForm

CreateRequestForm.PropTypes = {
    submitAction: PropTypes.func.isRequired,
}