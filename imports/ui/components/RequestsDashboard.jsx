import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Requests } from '../../api/requests.js';
import ExpandedRequest from '../components/ExpandedRequest';

class RequestsDashboard extends Component {
    toggleChecked() {
        Requests.update(this.props.request._id, {
            $set: { status: !this.props.request.status },
        });
    }

    openModal() {
        event.preventDefault()
        Session.set('showModal', !Session.get('showModal'));
        Session.set('requestId', this.props.request._id)

        var map = L.map('map').setView([25.657345, -100.40175], 10);

        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	        maxZoom: 19,
	        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo( map );

        L.marker([25.657345, -100.40175]).addTo(map)
        map.invalidateSize()
    }

    render() {
        const requestCheckedAttribute = this.props.request.status ? 'checked=true' : '';

        return (
            <tr>
                <td>{this.props.request.name}</td>
                <td>{this.props.request.phone}</td>
                <td>{this.props.request.insuranceCompany}</td>
                <td>{this.props.request.policyNumber}</td>
                <td>{this.props.request.status.toString()}</td>
                <td>
                    <button type="button" onClick={this.toggleChecked.bind(this)}>Toggle Complete</button>
                </td>
                <td>
                    <button type="button" onClick={this.openModal.bind(this)}>Expand</button>
                </td>
            </tr>
        );
    }
}

export default RequestsDashboard

RequestsDashboard.PropTypes = {
    submitAction: PropTypes.func.isRequired,
}