var User = require('../models/user')

function sendJSONResponse(res, status, data){
  res.status(status);
  res.json(data);
}

module.exports.index = function(req, res){
  User.find({}, function(err, users){
    sendJSONResponse(res, 200, users);
  })
}

module.exports.create = function(req, res){
  User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    birthday: req.body.birthday
  }, function(err, user){
    console.log(err, user);
    if(err){
      sendJSONResponse(res, 400, err);
    }
    sendJSONResponse(res, 201, user);
  })
}

module.exports.show = function(req, res){
  User.findOne({_id: req.params.user_id}, function(err, user){
    sendJSONResponse(res, 200, user);
  })
}

module.exports.update = function(req, res){
  User.update({_id: req.params.user_id}, req.body, function(err, user){
    sendJSONResponse(res, 200, user);
  })
}

module.exports.delete = function(req, res){
  User.findOne({_id: req.params.user_id}, function(err, user){
    user.remove();
    sendJSONResponse(res, 200, '');
  })
}
