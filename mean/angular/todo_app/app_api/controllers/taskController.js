var Task = require('../models/task.js');

function sendJSONResponse(res, status, data){
  res.status(status);
  res.json(data);
}

module.exports.index = function(req, res){
  Task.find({}, function(err, tasks){
    sendJSONResponse(res, 200, tasks);
  })
}

module.exports.create = function(req, res){
  Task.create({status: 'todo', criteria: req.body.criteria}, function(err, task){
    sendJSONResponse(res, 201, task);
  })
}

module.exports.update = function(req, res){
  if(req.body.status == 'todo'){
    Task.findOne({_id: req.params.id}, function(err, task){
      task.status = 'doing';
      task.save(function(err){
        sendJSONResponse(res, 201, '');
      })
    })
  } else {
    Task.findOne({_id: req.params.id}, function(err, task){
      task.status = 'done';
      task.save(function(err){
        sendJSONResponse(res, 201, '');
      })
    })
  }
}

module.exports.delete = function(req, res){
  Task.remove({_id: req.params.id}, function(err){
    sendJSONResponse(res, 200, '');
  })
}
