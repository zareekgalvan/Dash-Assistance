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
                        <img src="https://scontent.fntr3-1.fna.fbcdn.net/v/t35.0-12/17797473_10210234589793632_571616751_o.png?oh=76fc0c798b953e95298278aaa665a834&oe=58E6052F" className="navbar_logo"></img>
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