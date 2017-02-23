var Task = require('../models/task.js');
var User = require('../models/user.js');

var sendJSONResponse = function(res, status, data){
  res.status(status);
  res.json(data);
}

module.exports.auth = function(req, res){
  console.log(req.session);
  var username = req.body.username;
  var session = req.session;
  User.findOne({
    username: username
  }, function(err, user){
    if(err){
      return sendJSONResponse(res, 400, err)
    }
    if(!user){
      console.log('no user found, setting your cookie');
      User.create({username: username}, function(err, user){
        if(err){
          console.log(err);
          return sendJSONResponse(res, 400, err)
        }
        req.session.username = user.username;
        req.session.save();
        console.log(req.session);
        console.log('assigning cookie key username to ', user.username);
        return sendJSONResponse(res, 201, user)
      })
    } else {
      console.log(session.username);
      if(session.username !== username){
        console.log('user exists, but it isnt you!');
        return sendJSONResponse(res, 400, 'You don\'t have this user\'s cookie');
      } else {
        console.log('user exists, and i see your cookie');
        return sendJSONResponse(res, 200, user);
      }
    }
  })
}

module.exports.addEvent = function(req, res){
  // start date plus start time
  var startTime = new Date(new Date(req.body.date).getTime() + new Date(req.body.startTime).getTime());
  console.log(startTime);
  // end date plus start date
  var endTime = new Date(new Date(req.body.date).getTime() + new Date(req.body.endTime).getTime());
  console.log(endTime);

  startTime.setHours(startTime.getHours() - 6)
  endTime.setHours(endTime.getHours() - 6)

  console.log(startTime);
  console.log(endTime);

  Task.create({
    startTime: startTime,
    endTime: endTime,
    description: req.body.description,
    username: req.body.username
  }, function(err, event){
    if(err){
      console.log(err);
      return sendJSONResponse(res, 400, err)
    }
    return sendJSONResponse(res, 201, event)
  })
}

module.exports.getEvents = function(req, res){
  var now = new Date();
  var midnightTomorrow = new Date();

  midnightTomorrow.setHours( 48 );
  midnightTomorrow.setMinutes( 0 );
  midnightTomorrow.setSeconds( 0 );
  midnightTomorrow.setMilliseconds( 0 );

  Task.find({
    startTime: {
      $lte: midnightTomorrow,
      $gte: now
    },
    username: req.params.username
  }, function(err, tasks){
    if(err){
      sendJSONResponse(res, 400, err);
    } else {
      sendJSONResponse(res, 200, tasks);
    }
  })
}
