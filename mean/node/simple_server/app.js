var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
  if(request.url == '/'){
    fs.readFile('views/index.html', function(err, contents){
      response.writeHead(200, {'content-type':'text/html'})
      response.write(contents)
      response.end()
    })
  } else if(request.url == '/ninjas'){
    fs.readFile('views/ninjas.html', function(err, contents){
      response.writeHead(200, {'content-type':'text/html'})
      response.write(contents)
      response.end()
    })
  } else if(request.url == '/cars'){
    fs.readFile('views/cars.html', function(err, contents){
      response.writeHead(200, {'content-type':'text/html'})
      response.write(contents)
      response.end()
    })
  } else if(request.url == '/images/car.jpg'){
    fs.readFile('images/car.jpg', function(err, contents){
      response.writeHead(200, {'content-type':'image/jpg'})
      response.write(contents)
      response.end()
    })
  } else if(request.url == '/stylesheets/styles.css'){
    fs.readFile('stylesheets/styles.css', function(err, contents){
      response.writeHead(200, {'content-type':'text/css'})
      response.write(contents)
      response.end()
    })
  } else {
    fs.readFile('views/form.html', function(err, contents){
      response.writeHead(200, {'content-type':'text/html'})
      response.write(contents)
      response.end()
    })
  }
})

server.listen(8000);
