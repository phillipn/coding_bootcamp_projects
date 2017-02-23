var mongoose = require('mongoose');
var User = require('../models/user.js');

var sendJSONResponse = function(res, status, data){
  res.status(status);
  res.json(data);
}

module.exports.login = function(req, res){
  User.findOne({
    username: req.body.username
  }, function(err, user){
    if(err){
      return sendJSONResponse(res, 400, err)
    }
    if(!user){
      console.log('no user found, setting your cookie');
      User.create({username: req.body.username}, function(err, user){
        if(err){
          console.log(err);
          return sendJSONResponse(res, 400, err)
        }
        return sendJSONResponse(res, 201, user)
      })
    } else {
      return sendJSONResponse(res, 200, user);
    }
  })
}
