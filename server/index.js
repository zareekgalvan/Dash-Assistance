const router = require('./router');

const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      app = express();

var port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
router(app);
app.listen(port);
console.log('Your server is running on port ' + port + '.');

