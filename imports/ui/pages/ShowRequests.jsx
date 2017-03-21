import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Requests } from '../../api/requests.js';

import RequestsDashboard from '../components/RequestsDashboard';

class ShowRequests extends Component {

    renderRequests() {
        return this.props.requests.map((request) => (
        <RequestsDashboard key={request._id} request={request} />
        ));
    }
    
    render() {
        return (
        <div className="row">
            <header>
            <h1>Request List</h1>
            </header>

            <table style={{border: "1px solid black"}} cellPadding="10">
                <tbody>
                    <tr>
                        <th>Customer Name</th>
                        <th>Phone</th>
                        <th>Accident Address</th> 
                        <th>Insurance Company</th>
                        <th>Policy Number</th>
                        <th>Request Status</th>
                    </tr>
                    {this.renderRequests()}
                </tbody>
            </table>
        </div>
        );
    }
}

ShowRequests.propTypes = {
    requests: PropTypes.array.isRequired,
};

export default ShowRequests = createContainer(() => {
    Meteor.subscribe('requests');

    return {
        requests: Requests.find({}).fetch(),
    };
}, ShowRequests);