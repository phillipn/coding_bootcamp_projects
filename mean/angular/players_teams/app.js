var express = require('express');
var app = express();

app.use(express.static(__dirname + '/static'))
app.use(express.static(__dirname + '/bower_components'))

app.listen(8000)
