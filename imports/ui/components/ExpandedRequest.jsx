import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Requests } from '../../api/requests.js';

class ExpandedRequest extends Component {

    closeModal(){
        Session.set('showModal', false);
    }

    render() {
        console.log(this.props.request)
        return (
            <div id="requestModal" className="modal" display="none">

                <div className="modal-content">
                    <span className="close" onClick={this.closeModal.bind(this)}>&times;</span>
                    <h1>ALGO VA AQUI</h1>
                </div>

            </div>
        )
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