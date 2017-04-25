import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Requests } from '../../api/requests.js';
import { Employees } from '../../api/employees.js';

class ExpandedRequest extends Component {

    closeModal(){
        Session.set('showModal', false);
        Session.set('requestId', "");
    }

    componentDidUpdate(){
        if (this.props.request[0] != null) {
            var latitude = this.props.request[0]['latitude']
            var longitude = this.props.request[0]['longitude']

            this.context.map.setView([latitude, longitude], 25)
            this.context.map.removeLayer(this.context.currentMarker)
            this.context.currentMarker = L.marker([latitude, longitude])
            this.context.map.addLayer(this.context.currentMarker)

            this.context.map.invalidateSize()
        }
    }

    componentDidMount(){
        this.context.map = L.map('map').setView([0,0], 25);

        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	        maxZoom: 19,
	        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo( this.context.map );

        this.context.currentMarker = L.marker([0, 0])
        this.context.map.addLayer(this.context.currentMarker)

        this.context.map.invalidateSize()
    }

    getRequestStatus(){
        if(this.props.request[0]['status'] == 0){
            return(
                <p>Unassigned</p>
            )
        }
        else if(this.props.request[0]['status'] == 1){
            return(
                <p>Assigned</p>
            )
        }
        else if(this.props.request[0]['status'] == 2){
            return(
                <p>Complete</p>
            )
        }
    }

    getSaveButton(){
        if(this.props.request[0]['status'] == 0){
            return(
                <button type="submit" onClick={this.upgradeRequestStatus.bind(this)} className="btn btn-primary btn-block complete_button">Assign Request</button>
            )
        }
        else if(this.props.request[0]['status'] == 1){
            return(
                <button type="submit" onClick={this.upgradeRequestStatus.bind(this)} className="btn btn-primary btn-block complete_button">Complete Request</button>
            )
        }
    }

    upgradeRequestStatus(){
        if(this.props.request[0]['status'] == 0){
            Requests.update(this.props.request[0]['_id'], {
                $set: { status: 1, assignedEmployee: $("#assigned-employee").val()},
            });
        }
        else if(this.props.request[0]['status'] == 1){
            Requests.update(this.props.request[0]['_id'], {
                $set: { status: 2 },
            });
        }
    }

    getEmployees() {
        return this.props.employees.map((employee) => (
            <option key={employee._id} value={employee.name}>{employee.name}</option>
        ));
    }

    getAssignationDiv(){
        if(this.props.request[0]['status'] == 0){
            return(
                <select className="form-control" id="assigned-employee" required>
                    <option value="N/A">N/A</option>
                    {this.getEmployees()}
                </select>
            )
        }
        else{
            return(
                <p>{this.props.request[0]['assignedEmployee']}</p>
            )
        }
    }

    render() {
        //only show information if it is loaded
        if (this.props.request[0] != null) {
            return (
                <div id="requestModal" className="custom-modal" display="none" style={{overflow: scroll}}>
                    <div class="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <span className="close" onClick={this.closeModal.bind(this)}>&times;</span>
                                <h2>{this.props.request[0]['name']}</h2>
                                <div className = "exp-header-line">
                                    <img src="images/black-phone.png" className="exp-icon"></img>
                                    <span className="exp-header-text">{this.props.request[0]['phone']}</span>
                                </div>
                                <div className = "exp-header-line">
                                    <img src="images/black-email.png" className="exp-icon"></img>
                                    <span className="exp-header-text">{this.props.request[0]['email']}</span>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <h4>Car Brand:</h4>
                                <p>{this.props.request[0]['carBrand']}</p>
                                <h4>Car Model:</h4>
                                <p>{this.props.request[0]['carModel']}</p>
                                <h4>License Plates:</h4>
                                <p>{this.props.request[0]['licensePlates']}</p>
                            </div>

                            <div className="col-md-6">
                                <h4>Policy Number:</h4>
                                <p>{this.props.request[0]['policyNumber']}</p>
                                <div className="form-group">
                                    <h4>Assigned To:</h4>
                                    {this.getAssignationDiv()}
                                </div>
                            </div>

                            <div className="col-md-12" id="exp-accidentTime">
                                <h4>Request Date:</h4>
                                <p>{this.props.request[0]['accidentTime'].toLocaleDateString()} at {this.props.request[0]['accidentTime'].toLocaleTimeString()}</p>
                            </div>

                            <div className="col-md-12">
                                <div id="map" className="map"></div>
                            </div>

                            <div className="col-md-12" id="exp-accidentTime">
                                <h4>Status:</h4>
                                {this.getRequestStatus()}
                            </div>

                            <div className="modal-header"></div>

                            <div className="modal-footer">
                                <div className="col-md-4"></div>
                                <div className="form-group col-md-4">
                                    {this.getSaveButton()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div id="requestModal" className="custom-modal" display="none" style={{overflow: scroll}}>
                    <div class="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <span className="close" onClick={this.closeModal.bind(this)}>&times;</span>
                            </div>
                            <div className="col-md-6"> </div>
                            <div className="col-md-6"></div>
                            <div className="col-md-12"></div>
                            <div className="col-md-12">
                                <div id="map" className="map"></div>
                            </div>
                            <div className="col-md-12"></div>
                            <div className="modal-header"> </div>
                            <div className="modal-footer">
                                <div className="col-md-4"></div>
                                <div className="form-group col-md-4">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

ExpandedRequest.propTypes = {
    request: PropTypes.array.isRequired,
    employees: PropTypes.array.isRequired
};

export default createContainer(() => {
    Meteor.subscribe('requests');
    Meteor.subscribe('employees');

  // show modal if showModal is true
  if (Session.get('showModal')) {
    $('#requestModal').show()
  } else {
    $('#requestModal').hide()
  }

  return {
    request: Requests.find({"_id" : Session.get('requestId')}).fetch(),
    employees: Employees.find({"company" : Session.get('companyName')}).fetch()
  };
}, ExpandedRequest)

ExpandedRequest.contextTypes = {
  map: PropTypes.object,
  currentMarker: PropTypes.object
};