import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from '../ui/components/App.jsx';
import Login from '../ui/pages/Login.jsx';
import Register from '../ui/pages/Register.jsx';
import EditUser from '../ui/pages/EditUser.jsx';
import RegisterEmployee from '../ui/pages/RegisterEmployee.jsx';
import NotFound from '../ui/pages/NotFound.jsx';
import UserProfile from '../ui/pages/UserProfile.jsx';

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/profile" component={UserProfile}/>
            <Route path="/edit-profile" component={EditUser}/>
            <Route path="/registeremployee" component={RegisterEmployee}/>
            <Route path="/*" component={NotFound}/>
        </Route>
    </Router>
);