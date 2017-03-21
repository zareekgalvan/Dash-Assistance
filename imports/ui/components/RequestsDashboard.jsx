import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Requests } from '../../api/requests.js';

class RequestsDashboard extends Component {
    toggleChecked() {
        Requests.update(this.props.request._id, {
        $set: { status: !this.props.request.status },
        });
  }

    render() {
        const requestCheckedAttribute = this.props.request.status ? 'checked=true' : '';

        return (
            <tr>
                <td>{this.props.request.name}</td>
                <td>{this.props.request.phone}</td>
                <td>{this.props.request.accidentAddress}</td>
                <td>{this.props.request.insuranceCompany}</td>
                <td>{this.props.request.policyNumber}</td>
                <td>{this.props.request.status.toString()}</td>
                <td>
                    <button type="button" onClick={this.toggleChecked.bind(this)}>Toggle Complete</button>
                </td>
            </tr>
        );
    }
}

export default RequestsDashboard

RequestsDashboard.PropTypes = {
    submitAction: PropTypes.func.isRequired,
}