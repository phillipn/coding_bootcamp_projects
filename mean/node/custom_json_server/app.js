var express = require('express');
var app = express();
var data = require('./db.json')
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.json(data)
})

app.get('/users', function(req, res){
  res.json(data['users'])
})

app.get('/users/:id', function(req, res){
  var id = req.params.id;
  var record = data['users'][id - 1]
  res.json(record)
})

app.post('/users', function(req, res){
  var id = data['users'].length + 1;
  if(!req.body.name){
    res.send('Cut it out.')
  } else {
    data['users'].push({ 'id': id, 'name': req.body.name })
    fs.writeFile("./db.json", JSON.stringify(data), function(err) {
      res.json({ 'id': id, 'name': req.body.name })
    })
  }
})

app.listen(3000, function(){
  console.log('listening...');
})
Math.random
