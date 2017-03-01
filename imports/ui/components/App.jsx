import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import AppHeader from './AppHeader.jsx';

class App extends Component {
    showUserNav(){
        return  <ul className="nav navbar-nav navbar-right">
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
        </ul>;
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

export default App = createContainer(() => {
    return {};
}, App);
