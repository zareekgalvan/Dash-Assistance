import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Companies } from '../../api/companies.js';
import RequestsDashboard from '../components/RequestsDashboard';
import ExpandedRequest from '../components/ExpandedRequest';
import { browserHistory } from 'react-router';

class ShowCompanies extends Component {
    renderCompanies() {
        return this.props.companies.map((company) => (
            <tr>
                <td>
                    {company.companyName}
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
                                <h1 className="form_title">Companies List</h1>
                            </header>
                            <div className="col-md-4"></div>

                            <table cellPadding="10" className="table custom-table">
                                <thead className="thead-inverse">
                                <tr>
                                    <th>Company</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.renderCompanies()}
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

ShowCompanies.propTypes = {
    companies: PropTypes.array.isRequired,
};

export default ShowCompanies = createContainer(() => {
    Meteor.subscribe('companies');

    return {
        companies: Companies.find().fetch()
    };
}, ShowCompanies);