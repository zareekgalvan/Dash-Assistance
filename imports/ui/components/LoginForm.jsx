import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

class LoginForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.submitAction}>
                <div className="col-md-12 custom_form">
                    <div className="form-group form-with-icon clearfix">
                        <i className="fa fa-user fa-2x form-group-icon" aria-hidden="true"></i>
                        <span className="form-group-input">
                          <input placeholder="Email" type="email" id="email" className="login-email form-control" required/>
                        </span>
                    </div>

                    <div className="form-group form-with-icon clearfix">
                        <i className="fa fa-lock fa-2x form-group-icon" aria-hidden="true"></i>
                        <span className="form-group-input">
                          <input placeholder="Password" type="password" id="password" className="login-password form-control" required/>
                        </span>
                    </div>

                    <div className="col-md-12">{this.props.registerLink}</div>

                    <div className="col-md-4"></div>
                    <div className="form-group col-md-4">
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