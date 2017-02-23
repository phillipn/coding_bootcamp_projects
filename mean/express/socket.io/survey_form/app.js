var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './static')));
app.use(express.static(path.join(__dirname, './bower_components')));

var server = app.listen(8000, function(){
  console.log('listening...');
})

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
  socket.on('form_submit', function (data) {
    data['random'] = Math.random() * 100;
    socket.emit('form_info', JSON.stringify(data));
  })
})
