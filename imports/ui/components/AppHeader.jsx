import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import '../styles/customStyles.css'

class AppHeader extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse custom_navbar">
                <div className="container-fluid">
                    <a href="/login">
                        <img src="images/white_logo.png" className="navbar_logo"></img>
                    </a>
                    <div className="navbar-header">
                        <a style={{color: 'white'}} className="navbar-brand" href="/login">Pit Call</a>
                    </div>
                    {this.props.userNav}
                </div>
            </nav>

        )
    }
}

export default AppHeader