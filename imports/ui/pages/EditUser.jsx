import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import EditUserForm from '../components/EditUserForm.jsx';

class EditUser extends Component {




	getUser() {
		const user = Meteor.user();
		return user;
	}

	editUser(event) {
		event.preventDefault();

		//const data = getUser();

		//Meteor.users.update(Meteor.userId(), {$set: {profile: data}})
		console.log('Editando');
	}

	render() {
		return (
			<div className="row">
				<h1>Edit User</h1>
				<EditUserForm submitBtnLabel="Edit" submitAction={this.editUser} userInfo={this.getUser()}/>
			</div>
		);
	}
}

EditUser.PropTypes = {
    currentUser: PropTypes.object,
};

export default EditUser = createContainer(() => {
    return {
        currentUser: Meteor.user(),
    };
}, EditUser);