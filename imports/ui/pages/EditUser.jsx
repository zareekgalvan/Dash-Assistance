import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Companies } from '../../api/companies.js';
import EditUserForm from '../components/EditUserForm.jsx';

class EditUser extends Component {

      getInsuranceCompanies() {
            return this.props.companies.map((company) => (
                  <option key={company._id} value={company.companyName}>{company.companyName}</option>
            ));
      }

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
                  license_plates: license_plates,
                  type: user.type,
                  confirmed: user.confirmed
		};

		Meteor.users.update(Meteor.userId(), {$set: {profile: data}})

        window.location.replace("/profile");
	}

	render() {
		return (
			<div className="row">
                        <h1 className="form_title">Edit User Information</h1>
                        <EditUserForm submitBtnLabel="Save" cancelBtnLabel="Cancel" submitAction={this.editUser} insuranceCompanies={this.getInsuranceCompanies()}/>
			</div>
		);
	}
}

EditUser.PropTypes = {
    companies: PropTypes.array.isRequired
};

export default EditUser = createContainer(() => {
    Meteor.subscribe('companies');

    return {
        companies: Companies.find().fetch()
    };
}, EditUser);