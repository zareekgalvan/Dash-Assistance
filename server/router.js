const express = require('express');
const methodsController = require('./controllers/_methods-controller.js');


module.exports = function(app) {
	const apiRoutes = express.Router();
  	//routes will go here
  	apiRoutes.get('/helloworld', methodsController.helloworld);
	apiRoutes.get('/saySomething', methodsController.saySomething);
	apiRoutes.post('/postSomething', methodsController.postSomething);
	apiRoutes.post('/login', methodsController.login);
	apiRoutes.post('/sendRequest', methodsController.sendRequest)

  	app.use('/api', apiRoutes);
}
