import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

class EditUserForm extends Component {
    cancelEdit(){
        window.location.replace("/profile");
    }

    componentDidUpdate(){
        if (this.props.currentUser) {        
            $("#company").val(this.props.currentUser.profile.company)
        }
    }

	render() {
        if (this.props.currentUser) {
            return (
                <form onSubmit={this.props.submitAction}>
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="address">Address:</label>
                            <input placeholder="Address" type="text" id="address" defaultValue={this.props.currentUser.profile.address} className="form-control" required/>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-12"></div>

                    <div className="col-md-3"></div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label for="city">City:</label>
                            <input placeholder="City" type="text" id="city" defaultValue={this.props.currentUser.profile.city} className="form-control" required/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label for="state">State:</label>
                            <input placeholder="State" type="text" id="state" defaultValue={this.props.currentUser.profile.state} className="form-control" required/>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-12"></div>

                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="phone">Phone:</label>
                            <input placeholder="Phone" type="text" id="phone" defaultValue={this.props.currentUser.profile.phone} className="form-control" required/>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-12"></div>

                    <div className="col-md-3"></div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label for="company">Insurance Company:</label>
                            <select className="form-control" id="company" required>
                                <option className="defaultOption" value="">Select an Insurance Company</option>
                                {this.props.insuranceCompanies}
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label for="policy">Policy Number:</label>
                            <input placeholder="Policy Number" type="text" id="policy" defaultValue={this.props.currentUser.profile.policy_number} className="form-control" required/>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-12"></div>

                    <div className="col-md-3"></div>
                    <div className="col-md-3">
                    <div className="form-group">
                            <label for="car-brand">Car Brand:</label>
                            <input placeholder="Car Brand" type="text" id="car-brand" defaultValue={this.props.currentUser.profile.car_brand} className="form-control" required/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label for="car-model">Car Model:</label>
                            <input placeholder="Car Model" type="text" id="car-model" defaultValue={this.props.currentUser.profile.car_model} className="form-control" required/>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-12"></div>

                    <div className="col-md-3"></div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label for="car-year">Car Year:</label>
                            <input placeholder="Car Year" type="text" id="car-year" defaultValue={this.props.currentUser.profile.car_year} className="form-control" required/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label for="license-plates">License Plates:</label>
                            <input placeholder="License Plates" type="text" id="license-plates" defaultValue={this.props.currentUser.profile.license_plates} className="form-control" required/>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-12"></div>

                    <div className="col-md-4"></div>
                    <div className="form-group col-md-4">
                        <button type="submit" className="btn btn-primary btn-block submit_button">{this.props.submitBtnLabel}</button>
                    </div>
                    <div className="col-md-12"></div>

                    <div className="col-md-4"></div>
                    <div className="form-group col-md-4">
                        <button onClick={this.cancelEdit} className="btn btn-block  btn-danger">{this.props.cancelBtnLabel}</button>
                    </div>                        
                </form>
            );
        } else {
            return (
                null
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