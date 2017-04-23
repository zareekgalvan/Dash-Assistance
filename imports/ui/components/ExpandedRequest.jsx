import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Requests } from '../../api/requests.js';

class ExpandedRequest extends Component {

    closeModal(){
        Session.set('showModal', false);
        Session.set('requestId', "");
    }

    componentDidUpdate(){
        if (this.props.request[0] != null) {
            var latitude = this.props.request[0]['latitude']
            latitude = latitude.substring(9, latitude.length - 1)

            var longitude = this.props.request[0]['longitude']
            longitude = longitude.substring(9, longitude.length - 1)

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

    render() {
        //only show information if it is loaded
        if (this.props.request[0] != null) {
            console.log(this.props.request[0])

            return (
                <div id="requestModal" className="custom-modal" display="none" style={{overflow: scroll}}>
                    <div class="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <span className="close" onClick={this.closeModal.bind(this)}>&times;</span>
                            </div>

                            <div className="col-md-12">
                                <h2 id="customer-name">{this.props.request[0]['name']}</h2>
                            </div>

                            <div className="col-md-6">
                                <p id="phone">{this.props.request[0]['phone']}</p>
                            </div>
                            <div className="col-md-6">
                                <p id="email">{this.props.request[0]['email']}</p>
                            </div>

                            <div className="col-md-12"></div>

                            <div className="col-md-6 expandedColumn">
                                <h4>Car Brand:</h4>
                                <p>{this.props.request[0]['carBrand']}</p>
                                <h4>Car Model:</h4>
                                <p>{this.props.request[0]['carModel']}</p>
                                <h4>License Plates:</h4>
                                <p>{this.props.request[0]['licensePlates']}</p>
                            </div>

                            <div className="col-md-6 expandedColumn">
                                <h4>Policy Number:</h4>
                                <p>{this.props.request[0]['policyNumber']}</p>
                                <h4>Notes:</h4>
                                <p>{this.props.request[0]['notes']}</p>
                            </div>

                            <div className="col-md-12" id="accidentTime">
                                <h4>Request Date:</h4>
                                <p>Sunday at 5:00 AM</p>
                            </div>

                            <div className="col-md-12">
                                <div id="map" className="map"></div>
                            </div>

                            <div className="modal-header"></div>

                            <div className="modal-footer">
                                <div className="col-md-4"></div>
                                <div className="form-group col-md-4">
                                    <button type="submit" className="btn btn-primary btn-block complete_button">Mark as complete</button>
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
                            <div className="col-md-12"></div>
                            <div className="col-md-6"></div>
                            <div className="col-md-6"> </div>
                            <div className="col-md-12"></div>
                            <div className="col-md-6"> </div>
                            <div className="col-md-6"></div>
                            <div className="col-md-12"></div>
                            <div className="col-md-12">
                                <div id="map" className="map"></div>
                            </div>
                            <div className="modal-header"> </div>
                            <div className="modal-footer">
                                <div className="col-md-4"></div>
                                <div className="form-group col-md-4">
                                    <button type="submit" className="btn btn-primary btn-block complete_button">Mark as complete</button>
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
};

export default createContainer(() => {
    Meteor.subscribe('requests');

  // show modal if showModal is true
  if (Session.get('showModal')) {
    $('#requestModal').show()
  } else {
    $('#requestModal').hide()
  }

  return {
    request: Requests.find({"_id" : Session.get('requestId')}).fetch()
  };
}, ExpandedRequest)

ExpandedRequest.contextTypes = {
  map: PropTypes.object,
  currentMarker: PropTypes.object
};