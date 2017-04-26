import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

class UserProfile extends Component {
    editUser(){
        window.location.replace("/edit-profile");
    }

    render() {
        if (this.props.currentUser) {
            return(
                <div className="row">
                    <h1 className="form_title">{this.props.currentUser.profile.name}</h1>
                    <div className="col-md-1"></div>
                    <div className="col-md-3">
                        <h4>Email: </h4><p>{this.props.currentUser.emails[0].address}</p>
                        <h4>Phone: </h4><p>{this.props.currentUser.profile.phone}</p>
                        <h4>Address: </h4><p>{this.props.currentUser.profile.address}</p>
                        <h4>City: </h4><p>{this.props.currentUser.profile.city}, {this.props.currentUser.profile.state}</p>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3">
                        <h4>Insurance Company: </h4><p>{this.props.currentUser.profile.company}</p>
                        <h4>Policy Number: </h4><p>{this.props.currentUser.profile.policy_number}</p>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3">
                        <h4>Car Brand: </h4><p>{this.props.currentUser.profile.car_brand}</p>
                        <h4>Car Model: </h4><p>{this.props.currentUser.profile.car_model}</p>
                        <h4>Car Year: </h4><p>{this.props.currentUser.profile.car_year}</p>
                        <h4>License Plates: </h4><p>{this.props.currentUser.profile.license_plates}</p>
                    </div>

                    <div className="col-md-12"></div>
                    <div className="col-md-4"></div>
                    <div className="form-group col-md-4">
                        <button type="submit" className="btn btn-primary btn-block submit_button" onClick={this.editUser}>Edit</button>
                    </div>
                </div>
            );
        } else {
            return (
                null
            );
        }
    }
}

UserProfile.PropTypes = {
    currentUser: PropTypes.object,
};

export default UserProfile = createContainer(() => {
    return {
        currentUser: Meteor.user(),
    };
}, UserProfile);