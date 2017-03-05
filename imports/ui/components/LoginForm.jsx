import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

class LoginForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.submitAction}>
                <div className="col-md-12">
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input placeholder="Email" type="email" id="email" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input placeholder="Password" type="password" id="password" className="form-control" required/>
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">{this.props.submitBtnLabel}</button>
                </div>
            </form>
        );
    }
}

export default LoginForm

LoginForm.PropTypes = {
    submitAction: PropTypes.func.isRequired,
}