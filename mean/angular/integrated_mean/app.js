var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
require('./app_api/models/db.js');
var routes = require('./app_api/routes/routes.js');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'bower_components')))
app.use(express.static(path.join(__dirname, 'app_client')))

app.use('/api', routes);

app.listen(8000);
