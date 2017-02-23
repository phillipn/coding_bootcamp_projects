var User = require('../models/user.js')

function sendJSONResponse(res, status, data){
  res.status(status);
  res.json(data);
}

module.exports.getProfile = function(req, res){
  console.log(req.payload);
  User.findOne({email: req.payload.email}, function(err, user){
    sendJSONResponse(res, 200, user);
  })
}
