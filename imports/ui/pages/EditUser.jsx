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
            car_model = $('#car-model').val(),
            car_name = $('#car-name').val(),
            car_agency = $('#car-agency').val(),
            policy_number = $('#policy').val()
            ;

		let data = {
            name: user.name,
            address: address,
            city: city,
            state: state,
            phone: phone,
            company: company,
            car_model: car_model,
            car_agency: car_agency,
            car_name: car_name,
			policy_number: policy_number
		};

		Meteor.users.update(Meteor.userId(), {$set: {profile: data}})
		console.log('Editando');
	}

	render() {
		return (
			<div className="row">
				<h1>Edit User</h1>
				<EditUserForm submitBtnLabel="Edit" submitAction={this.editUser}/>
			</div>
		);
	}
}

export default EditUser