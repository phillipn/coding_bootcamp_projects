var fs = require('fs');

function sendResponse(response, contents, type){
  response.writeHead(200, {'Content-type': type});
  response.write(contents);
  response.end();
}

module.exports =
  function (request, response){
    if(request.url === '/'){
      fs.readFile('views/index.html', 'utf8', function (errors, contents){
        sendResponse(response, contents, 'text/html');
      });
    } else if(request.url === 'views/dojo.html'){
      fs.readFile('views/dojo.html', 'utf8', function (errors, contents){
        sendResponse(response, contents, 'text/html');
      });
    } else if(request.url === 'stylesheets/styles.css'){
      fs.readFile('stylesheets/styles.css', 'utf8', function (errors, contents){
        sendResponse(response, contents, 'text/css');
      });
    } else {
      response.end('File not found!!!');
    }
  }
