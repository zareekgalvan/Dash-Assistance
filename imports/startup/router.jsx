import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from '../ui/components/App.jsx';
import Login from '../ui/pages/Login.jsx';
import Register from '../ui/pages/Register.jsx';
import RegisterEmployee from '../ui/pages/RegisterEmployee.jsx';
import NotFound from '../ui/pages/NotFound.jsx';

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/registeremployee" component={RegisterEmployee}/>
            <Route path="/*" component={NotFound}/>
        </Route>
    </Router>
);