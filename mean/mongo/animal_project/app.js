var express = require('express')
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
var session = require('express-session')
var flash = require('flash')
var path = require('path')
require('./models/animal');
var routes = require('./routes/index.js');

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, './static')))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser('secretString'));
app.use(session({cookie: { maxAge: 60000 }}));
app.use(flash());
app.use('/', routes);
app.use(function(req, res, next){
    res.locals.success_messages = req.flash('success_messages');
    res.locals.error_messages = req.flash('error_messages');
    next();
});

app.listen(8000, function(){
  console.log('connected...');
})

module.exports = app
