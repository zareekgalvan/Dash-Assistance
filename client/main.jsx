import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '../imports/startup/router.jsx';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

Meteor.startup( function() {
  render(renderRoutes(), document.getElementById('app-root'));
});