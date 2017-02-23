var ios = require('socket.io-express-session');
var path = require('path');
var Session = require('express-session');
var SessionStore = require('session-file-store')(Session);
var session = Session({store: new SessionStore({path: __dirname+'/tmp/sessions'}), secret: 'pass', resave: true, saveUninitialized: true});

// creating new express app
var express = require('express');
var app = express();

app.use(express.static(path.join(__dirname, '/bower_components')));
app.set('views', './views'); // template engine initialization
app.set('view engine', 'ejs');
app.use(session); // session support

// attaching express app to HTTP server
var http = require('http');
var server = http.createServer(app);
server.listen('8000'); // start listening

require('./models/db')
var User = require('./models/user')
var Post = require('./models/post')
// creating new socket.io app
var io = require('socket.io')(server);

app.get('/', function(req, res) {
  res.render('index');
});

function drawRoom(socket, session){
  var data = {};
  User.find({present: true}, function(err, users){
    data['users'] = users;
    socket.emit('greeting', session['name'])
    Post.find({}).sort({createdAt: -1}).limit(10).exec(function(err, posts){
      data['posts'] = posts;
      socket.emit('draw_room', data);
      socket.broadcast.emit("add_user", session['name']);
    })
  })
}

io.use(ios(session)); // session support

io.on('connection', function(socket){
  var session = socket.handshake.session;

  if(session.hasOwnProperty('name')){
    User.update({name: session.name}, {present: true}, function(err){
      if(err){
        console.log(err);
      }
    })
    drawRoom(socket, session)
  } else {
    socket.emit('prompt');
  }

  socket.on('name_submission', function(name) {
    session.name = name;
    session.save()

    var user  = new User({name: name, present: true});
    user.save();
    drawRoom(socket, session);
  });

  socket.on('post_submission', function(post) {
    Post.create({name: session.name, post: post}, function(err, post){
      if(err){
        console.log(err);
      }
      io.emit('add_post', post);
    })
  });

  socket.on('disconnect', function() {
     console.log('Got disconnect!');
     User.update({name: session.name}, {present: false}, function(err){
      if(err){
        console.log(err);
      }
     })
     socket.broadcast.emit("remove_user", session['name']);
  });
});
