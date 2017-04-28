import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import LoginForm from '../components/LoginForm.jsx';
import { browserHistory } from 'react-router';

class Forbidden extends Component {
    render() {
        return (
            <div className="row">
                <div className="alert-danger col-md-12">
                    <h1>403 Access Forbidden</h1>
                </div>
            </div>
        );
    }
}

export default Forbidden