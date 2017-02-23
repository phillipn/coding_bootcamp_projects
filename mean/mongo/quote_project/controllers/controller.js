var Quote = require('../models/quote')

var sendJSONResponse = function(res, status, template, data){
  if(!data){
    data = {};
  }
  res.status(status);
  res.render(template, data);
}

module.exports.form = function(req, res){
  Quote.find({}).sort({createdAt: -1}).exec(function(err, quotes){
    sendJSONResponse(res, 200, 'form', {'quotes': quotes})
  })
}

module.exports.postForm = function(req, res){
  var data = req.body;
  Quote.create({text: data['text'], author: data['author']}, function(err, quote){
    var errors = [];
    if(err){
      for (field in err.errors) {
        errors.push(err.errors[field].message);
      }
      Quote.find({}, function(err, quotes){
        sendJSONResponse(res, 200, 'form', {'quotes': quotes, 'errors': errors})
      })
    } else{
      res.redirect('/')
    }
  })
}
