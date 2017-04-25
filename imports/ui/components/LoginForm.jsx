import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

class LoginForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.submitAction}>
                <div className="col-xs-4"></div>
                <div className="col-xs-4 custom_form">
                    <img src="images/green_logo.png" className="login_formLogo"></img>

                    <div className="form-group">
                        <input placeholder="Email" type="email" id="email" className="form-control" required/>
                    </div>

                    <div className="form-group">
                        <input placeholder="Password" type="password" id="password" className="form-control" required/>
                    </div>

                    <div className="col-xs-12">{this.props.registerLink}</div>

                    <div className="col-xs-4"></div>
                    <div className="form-group col-xs-4">
                        <button type="submit" className="btn btn-primary btn-block submit_button">{this.props.submitBtnLabel}</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default LoginForm

LoginForm.PropTypes = {
    submitAction: PropTypes.func.isRequired,
}