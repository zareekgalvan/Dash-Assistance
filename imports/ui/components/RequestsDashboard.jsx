import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Requests } from '../../api/requests.js';
import ExpandedRequest from '../components/ExpandedRequest';

class RequestsDashboard extends Component {
    openModal() {
        event.preventDefault()
        Session.set('showModal', !Session.get('showModal'));
        Session.set('requestId', this.props.request._id)
    }

    getRequestStatus(){
        if(this.props.request.status == 0){
            return(
                <p>Unassigned</p>
            )
        }
        else if(this.props.request.status == 1){
            return(
                <p>Assigned</p>
            )
        }
        else if(this.props.request.status == 2){
            return(
                <p>Complete</p>
            )
        }
    }

    render() {
        if($.inArray(this.props.request.status, this.props.filterValue) != -1){
            return (
                <tr className="request-row"onClick={this.openModal.bind(this)}>
                    <td>{this.props.request.accidentTime.toLocaleDateString()} at {this.props.request.accidentTime.toLocaleTimeString()}</td>
                    <td>{this.props.request.name}</td>
                    <td>{this.props.request.phone}</td>
                    <td>{this.props.request.policyNumber}</td>
                    <td>{this.getRequestStatus()}</td>
                </tr>
            );
        }
        else{
            return(
                null
            );
        }
    }
}

export default RequestsDashboard

RequestsDashboard.PropTypes = {
    submitAction: PropTypes.func.isRequired,
}