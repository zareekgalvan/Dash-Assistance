import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import EditUserForm from '../components/EditUserForm.jsx';

class EditUSer extends Component {

	getUser() {
		return (
			this.props.currentUser.profile
		);
	}

	editUser(event) {
		event.preventDefault();

		const profile = getUser();


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