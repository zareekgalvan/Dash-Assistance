import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import AppHeader from './AppHeader.jsx';

class App extends Component {
    showUserNav(){
        const user_icon = "/images/user-icon.png"
        const login_icon = "images/login-icon.png"
        const register_icon = "images/register-icon.png"

        if (this.props.currentUser) {
            if (this.props.currentUser.profile.type == "user"){
                return  (
                    <div>
                        <ul className="nav navbar-nav">
                            <li><a style={{color: 'white'}} href="/createrequest">Create Request</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a style={{color: 'white'}} href="/profile"><span><img src={user_icon} className="navbar_icon"></img></span>Profile</a></li>
                            <li onClick={this.logout}><a style={{color: 'white'}} href="/login"><span><img src={login_icon} className="navbar_icon"></img></span>Log out</a></li>
                        </ul>
                    </div>
                );
            }
            else if (this.props.currentUser.profile.type == "admin"){
                return  (
                    <div>
                        <ul className="nav navbar-nav">
                            <li><a style={{color: 'white'}} href="/registeradministrator">Register Administrator</a></li>
                            <li><a style={{color: 'white'}} href="/registerinsurancecompany">Register Insurance Company</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li onClick={this.logout}><a style={{color: 'white'}} href="/login"><span><img src={login_icon} className="navbar_icon"></img></span>Log out</a></li>
                        </ul>
                    </div>
                );
            }
            else if (this.props.currentUser.profile.type == "insurance-company"){
                return  (
                    <div>
                        <ul className="nav navbar-nav">
                            <li><a style={{color: 'white'}} href="/registeremployee">Register Employee</a></li>
                            <li><a style={{color: 'white'}} href="/showrequests">Show Requests</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li onClick={this.logout}><a style={{color: 'white'}} href="/login"><span><img src={login_icon} className="navbar_icon"></img></span>Log out</a></li>
                        </ul>
                    </div>
                );
            }
            else {
                return  (
                <div>
                    <ul className="nav navbar-nav navbar-right">                
                        <li><a style={{color: 'white'}} href="/register"><span><img src={register_icon} className="navbar_icon"></img></span>Register</a></li>
                        <li><a style={{color: 'white'}} href="/login"><span><img src={login_icon} className="navbar_icon"></img></span>Log in</a></li>
                    </ul>
                </div>
                );
            }
        } else {
            return  (
                <div>
                    <ul className="nav navbar-nav navbar-right">                
                        <li><a style={{color: 'white'}} href="/register"><span><img src={register_icon} className="navbar_icon"></img></span>Register</a></li>
                        <li><a style={{color: 'white'}} href="/login"><span><img src={login_icon} className="navbar_icon"></img></span>Log in</a></li>
                    </ul>
                </div>
            );
        }
    }

    logout() {
        Meteor.logout();
    }

    render() {
        return (
            <div id="app-container" className="container-fluid page_overrideWidth">

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
