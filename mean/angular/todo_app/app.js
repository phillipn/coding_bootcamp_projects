var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('./app_api/routes/index.js');
require('./app_api/models/db.js')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', routes);
app.use(express.static(path.join(__dirname, 'app_client')))
app.use(express.static(path.join(__dirname, 'bower_components')))

app.listen(8000);
