var express = require('express');
var app = express();
var path = require('path');

require('./models/db');
var routes = require('./routes/index.js');

// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './static')));
app.use('/', routes);

app.listen(8000, function(){
  console.log('listening...');
})
