import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

class NotFound extends Component {
    render() {
        return (
            <div className="alert-warning">404 Page not found.</div>
        );
    }
}

export default NotFound