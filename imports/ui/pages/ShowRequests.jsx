import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Requests } from '../../api/requests.js';
import RequestsDashboard from '../components/RequestsDashboard';
import ExpandedRequest from '../components/ExpandedRequest';

class ShowRequests extends Component {
    renderRequests() {
        var filterValueArr = []

        if($("#unassigned").is(":checked")){
            filterValueArr.push(0)
        }
        if($("#assigned").is(":checked")){
            filterValueArr.push(1)
        }
        if($("#complete").is(":checked")){
            filterValueArr.push(2)
        }

        return this.props.requests.map((request) => (
            <RequestsDashboard key={request._id} request={request} filterValue={filterValueArr}/>
        ));
    }

    filterRequests(){
        this.forceUpdate()
    }
    
    render() {
        return (
        <div className="row">
            <header>
                <h1 className="form_title">Request List</h1>
            </header>

            <div className="col-md-4"></div>
            <div className="col-md-4">
                <label htmlFor="unassigned" className="checkbox-inline request-filter">
                    <input id="unassigned" type="checkbox" value="0" onChange={this.filterRequests.bind(this)} defaultChecked/>Unassigned
                </label>
                <label htmlFor="assigned" className="checkbox-inline request-filter">
                    <input id="assigned" type="checkbox" value="1" onChange={this.filterRequests.bind(this)} defaultChecked/>Assigned
                </label>
                <label htmlFor="complete" className="checkbox-inline request-filter">
                    <input id="complete" type="checkbox" value="2" onChange={this.filterRequests.bind(this)} defaultChecked/>Complete
                </label>
            </div>
            <div className="col-md-4"></div>

            <table style={{border: "1px solid black"}} cellPadding="10" className="table">
                <thead className="thead-inverse">
                    <tr>
                        <th>Date</th>
                        <th>Customer Name</th>
                        <th>Phone</th>
                        <th>Policy Number</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRequests()}
                </tbody>
            </table>
            <ExpandedRequest />
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
        requests: Requests.find({"insuranceCompany" : Session.get('companyName'), "status": {$in: [0, 1, 2]}}, {sort: {accidentTime: -1}}).fetch()
    };
}, ShowRequests);