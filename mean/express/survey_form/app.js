var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path')
var cache = require('memory-cache');

// now just use the cache

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

function form_valid(data){
  if(!data.name || !data.location || ! data.language){
    return false;
  }
}

app.get('/', function(req, res){
  res.render('index')
})

app.get('/results', function(req, res){
  data = {
    name: cache.get('name'),
    language: cache.get('language'),
    location: cache.get('location'),
  }
  res.render('results', data)
})

app.post('/', function(req, res){
  var data = req.body;
  if(form_valid){
    cache.put('name', req.body.name);
    cache.put('location', req.body.location);
    cache.put('language', req.body.language);
    res.redirect('results');
  } else {
    res.redirect('/');
  }
})

app.listen(8000, function() {
 console.log("listening on port 8000");
});
