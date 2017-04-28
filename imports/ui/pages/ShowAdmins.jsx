import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { browserHistory } from 'react-router';

class ShowAdmins extends Component {
    renderAdmins() {

        console.log(Meteor.users.find({'profile.type': 'admin'}).fetch());

        return this.props.admins.map((admin) => (
            <tr>
                <td>
                    {admin.emails[0].address}
                </td>
            </tr>
        ));
    }

    render() {
        if (Meteor.user() !== undefined) {
            if (Meteor.user()) {
                if (Meteor.user().profile.type == 'admin') {
                    return (
                        <div className="row">
                            <header>
                                <h1 className="form_title">Admin List</h1>
                            </header>
                            <div className="col-md-4"></div>

                            <table cellPadding="10" className="table custom-table">
                                <thead className="thead-inverse">
                                <tr>
                                    <th>Company</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.renderAdmins()}
                                </tbody>
                            </table>
                        </div>
                    );
                } else {
                    browserHistory.push('/forbidden')
                }
            }
        } else {
            return (
                <div className="row"></div>
            );
            browserHistory.push('/forbidden');
        }
    }
}

ShowAdmins.propTypes = {
    admins: PropTypes.array.isRequired,
};

export default ShowAdmins = createContainer(() => {
    return {
        admins: Meteor.users.find({}, {'profile.type': 'admin'}).fetch()
    };
}, ShowAdmins);