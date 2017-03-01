import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

class LoginRegisterForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.submitAction}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input placeholder="Email" type="email" id="email" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input placeholder="Password" type="password" id="password" className="form-control"/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">{this.props.submitBtnLabel}</button>
                </div>
            </form>
        )
    }
}

export default LoginRegisterForm

LoginRegisterForm.PropTypes = {
    submitAction: PropTypes.func.isRequired,
}