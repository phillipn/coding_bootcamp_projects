var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

require('./models/quote');
var routes = require('./routes/index.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './static')));
app.use('/', routes);

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.listen(8000, function(){
  console.log('listening...');
})
