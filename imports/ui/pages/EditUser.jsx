import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import EditUserForm from '../components/EditUserForm.jsx';

class EditUser extends Component {

	editUser(event) {
		event.preventDefault();

		let user = Meteor.user().profile;

        const
            address = $('#address').val(),
            city = $('#city').val(),
            state = $('#state').val(),
            phone = $('#phone').val(),
            company = $('#company').val(),
            car_brand = $('#car-brand').val(),
            car_model = $('#car-model').val(),
            car_year = $('#car-year').val(),
            policy_number = $('#policy').val(),
            license_plates = $('#license-plates').val()
            ;

		let data = {
            name: user.name,
            address: address,
            city: city,
            state: state,
            phone: phone,
            company: company,
            car_brand: car_brand,
            car_model: car_model,
            car_year: car_year,
			policy_number: policy_number,
            license_plates: license_plates
		};

		Meteor.users.update(Meteor.userId(), {$set: {profile: data}})
		console.log('Editando');

        window.location.replace("/profile");
	}

	render() {
		return (
			<div className="row">
				<h1 className="form_title">Edit User Information</h1>
				<EditUserForm submitBtnLabel="Save" cancelBtnLabel="Cancel" submitAction={this.editUser}/>
			</div>
		);
	}
}

export default EditUser