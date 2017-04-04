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
                    <h1 className="form_title">My Profile</h1>
                    <div className="col-xs-4"></div>
                    <div className="col-xs-4 custom_form">
                        <ul>
                            <li><h4>Name: </h4><h5>{this.props.currentUser.profile.name}</h5></li>
                            <li><h4>Email: </h4><h5>{this.props.currentUser.emails[0].address}</h5></li>
                            <li><h4>Phone: </h4><h5>{this.props.currentUser.profile.phone}</h5></li>
                            <li><h4>Address: </h4><h5>{this.props.currentUser.profile.address}</h5></li>
                            <li><h4>City: </h4><h5>{this.props.currentUser.profile.city}</h5></li>
                            <li><h4>State: </h4><h5>{this.props.currentUser.profile.state}</h5></li>
                            <li><h4>Insurance Company: </h4><h5>{this.props.currentUser.profile.company}</h5></li>
                            <li><h4>Policy Number: </h4><h5>{this.props.currentUser.profile.policy_number}</h5></li>
                            <li><h4>Car Brand: </h4><h5>{this.props.currentUser.profile.car_brand}</h5></li>
                            <li><h4>Car Model: </h4><h5>{this.props.currentUser.profile.car_model}</h5></li>
                            <li><h4>Car Year: </h4><h5>{this.props.currentUser.profile.car_year}</h5></li>
                            <li><h4>License Plates: </h4><h5>{this.props.currentUser.profile.license_plates}</h5></li>
                        </ul>
                    </div>

                    <div className="col-xs-12"></div>
                    <div className="col-xs-4"></div>
                    <div className="form-group col-xs-4">
                        <button type="submit" className="btn btn-primary btn-block submit_button" onClick={this.editUser}>Edit</button>
                    </div>
                </div>
            );
        } else {
            return (
                <h1>PLEASE LOGIN TO SEE YOUR PROFILE INFORMATION!!</h1>
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