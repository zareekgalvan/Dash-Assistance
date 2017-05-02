import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Login from '../pages/Login.jsx';

import AppHeader from './AppHeader.jsx';

class App extends Component {
    showUserNav(){
        const user_icon = "images/user-icon.png"
        const login_icon = "images/login-icon.png"
        const register_icon = "images/register-icon.png"

        if (this.props.currentUser) {
            if (this.props.currentUser.profile.type == "user"){
                return  (
                    <div>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a style={{color: 'white'}} href="/profile"><span><img src={user_icon} className="navbar_icon"></img></span>{this.props.currentUser.profile.name.split(' ')[0]}</a></li>
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
                            <li><a style={{color: 'white'}}><span><img src={user_icon} className="navbar_icon"></img></span>Administrator</a></li>
                            <li onClick={this.logout}><a style={{color: 'white'}} href="/login"><span><img src={login_icon} className="navbar_icon"></img></span>Log out</a></li>
                        </ul>
                    </div>
                );
            }
            else if (this.props.currentUser.profile.type == "insurance-company"){
                Session.set('companyName', this.props.currentUser.profile.companyName);
                return  (
                    <div>
                        <ul className="nav navbar-nav">
                            <li><a style={{color: 'white'}} href="/registeremployee">Register Employee</a></li>
                            <li><a style={{color: 'white'}} href="/showrequests">Request Dashboard</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a style={{color: 'white'}}><span><img src={user_icon} className="navbar_icon"></img></span>{this.props.currentUser.profile.companyName}</a></li>
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
        if(window.location.href == "http://localhost:3000/"){
            return (
                <div id="app-container" className="container-fluid page_overrideWidth">

                    <AppHeader appTitle="Pit Call" userNav={this.showUserNav()}/>

                    <main className="outer_login_container">
                        { this.props.children }
                        <Login/>
                    </main>
                </div>
            );
        }
        else{
            return (
                <div id="app-container" className="container-fluid page_overrideWidth">

                    <AppHeader appTitle="Pit Call" userNav={this.showUserNav()}/>

                    <main className="outer_login_container">
                        { this.props.children }
                    </main>
                </div>
            );
        }
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
