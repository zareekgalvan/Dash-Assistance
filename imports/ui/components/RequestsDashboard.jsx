import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

class RequestsDashboard extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.request.name}</td>
                <td>{this.props.request.phone}</td>
                <td>{this.props.request.accidentAddress}</td>
                <td>{this.props.request.insuranceCompany}</td>
                <td>{this.props.request.policyNumber}</td>
                <td>{this.props.request.status}</td>
            </tr>
        );
    }
}

export default RequestsDashboard

RequestsDashboard.PropTypes = {
    submitAction: PropTypes.func.isRequired,
}