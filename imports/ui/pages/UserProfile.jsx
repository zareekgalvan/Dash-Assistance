import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

class UserProfile extends Component {
    render() {
        if (this.props.currentUser) {
            return(
                <div className="row">
                    <h1>My Profile</h1>

                    <ul>
                        <li>Name: {this.props.currentUser.profile.name}</li>
                        <li>Address: {this.props.currentUser.profile.address}</li>
                        <li>City: {this.props.currentUser.profile.city}</li>
                        <li>State: {this.props.currentUser.profile.state}</li>
                        <li>Phone: {this.props.currentUser.profile.phone}</li>
                        <li>company: {this.props.currentUser.profile.company}</li>
                        <li>Car Model: {this.props.currentUser.profile.car_model}</li>
                        <li>Car Agency: {this.props.currentUser.profile.car_agency}</li>
                        <li>Car Name: {this.props.currentUser.profile.car_name}</li>
                        <li>Policy Number: {this.props.currentUser.profile.policy_number}</li>
                    </ul>

                    <a href="/edit-profile">Edit Profile Information</a>
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