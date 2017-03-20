const express = require('express');
const _ourController = require('./controllers/_our-controller');


module.exports = function(app) {
	const apiRoutes = express.Router();
  	//routes will go here
  	apiRoutes.get('/helloworld', _ourController.helloworld);
	apiRoutes.get('/saySomething', _ourController.saySomething);
	apiRoutes.post('/postSomething', _ourController.postSomething);

  	app.use('/api', apiRoutes);
}
