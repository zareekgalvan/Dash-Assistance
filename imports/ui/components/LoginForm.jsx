import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

class LoginForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.submitAction}>
                <div className="col-xs-4"></div>
                <div className="col-xs-4 login_form">
                    <img src="https://scontent.fntr3-1.fna.fbcdn.net/v/t35.0-12/17797136_10210234589833633_1252141333_o.png?oh=decf7c75485605bfaba9851d38a6fe52&oe=58E4F62A" className="login_formLogo"></img>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input placeholder="Email" type="email" id="email" className="form-control" required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input placeholder="Password" type="password" id="password" className="form-control" required/>
                    </div>

                    <div className="col-xs-12">{this.props.registerLink}</div>

                    <div className="col-xs-4"></div>
                    <div className="form-group col-xs-4">
                        <button type="submit" className="btn btn-primary btn-block login_button">{this.props.submitBtnLabel}</button>
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