import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import AppHeader from './AppHeader.jsx';

class App extends Component {
    showUserNav(){
        if (this.props.currentUser) {
            return  (
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="/profile">Profile</a></li>
                    <li><button className="btn btn-primary" onClick={this.logout}>Logout</button></li>
                </ul>
            );
        } else {
            return  (
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                    <li><a href="/registeremployee">Register Employee</a></li>
                    <li><a href="/createrequest">Create Request</a></li>
                    <li><a href="/showrequests">Show Requests</a></li>
                </ul>
            );
        }
    }

    logout() {
        Meteor.logout();
    }

    render() {
        return (
            <div id="app-container" className="container-fluid">

                <AppHeader appTitle="Pit Call" userNav={this.showUserNav()}/>

                <main className="container">
                    { this.props.children }
                </main>
            </div>
        );
    }
}

App.PropTypes = {
    currentUser: PropTypes.object,
};

export default App = createContainer(() => {
    return {
        currentUser: Meteor.user(),
    };
}, App);
