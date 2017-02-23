var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './static')));
app.use(express.static(path.join(__dirname, './bower_components')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var number = 0;

app.get('/', function(req, res){
  return res.render('index', {'number': number})
})

var server = app.listen(8000, function(){
  console.log('listening...');
})

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
  socket.on('button_press', function (data) {
    number++;
    io.emit('increment', {'count': number});
  })
  socket.on('button_reset', function (data) {
    number = 0;
    io.emit('increment', {'count': number});
  })
})
