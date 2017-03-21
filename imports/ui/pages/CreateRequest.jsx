import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Requests } from '../../api/requests.js';

import CreateRequestForm from '../components/CreateRequestForm.jsx';

class CreateRequest extends Component {

    createRequest(event){
        event.preventDefault();

        const
            name = $("#name").val(),
            phone = $("#phone").val(),
            email = $("#email").val(),
            accidentAddress = $("#accident-address").val(),
            city = $("#city").val(),
            state = $("#state").val(),
            insuranceCompany = $("#insurance-company").val(),
            policyNumber = $("#policy-number").val(),
            carBrand = $("#car-brand").val(),
            carModel = $("#car-model").val()
            notes = $("#notes").val(),
            assignedEmployee = "none",
            accidentTime = new Date(),
            status = "unassigned"

        Requests.insert({
            name : name,
            phone: phone,
            email : email,
            accidentAddress: accidentAddress,
            city: city,
            state: state,
            insuranceCompany: insuranceCompany,
            policyNumber: policyNumber,
            carBrand: carBrand,
            carModel: carModel,
            notes: notes,
            assignedEmployee: assignedEmployee,
            accidentTime: accidentTime,
            status: status
        });

        console.log(Requests.find({}).fetch());
    }
    
    render() {
        return (
            <div className="row">
                    <h1>Create Request</h1>
                    <CreateRequestForm submitBtnLabel="Create request" submitAction={this.createRequest}/>
            </div>
        );
    }
}

CreateRequest.propTypes = {
    requests: PropTypes.array.isRequired,
};

export default CreateRequest = createContainer(() => {
    Meteor.subscribe('requests');

    return {
        requests: Requests.find({}).fetch(),
    };
}, CreateRequest);