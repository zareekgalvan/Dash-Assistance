import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

class AppHeader extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">{this.props.appTitle}</a>
                    </div>

                    {this.props.userNav}

                </div>
            </nav>
        )
    }
}

export default AppHeader