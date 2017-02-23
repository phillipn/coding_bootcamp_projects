var User = require('../models/user.js')
var Post = require('../models/post.js')

function sendJSONResponse(res, status, data){
  res.status(status);
  res.json(data);
}

module.exports.addPost = function(req, res){
  Post.create({
    post: req.body.post,
    user: req.payload.email
  }, function(err, post){
    if(err){
      sendJSONResponse(res, 400, err)
    }
    sendJSONResponse(res, 201, post)
  })
}

module.exports.getPosts = function(req, res){
  Post.find({}, function(err, posts){
    sendJSONResponse(res, 200, posts);
  })
}

module.exports.addComment = function(req, res){
  console.log('in server');
  Post.findOne({_id: req.params.post_id}, function(err, post){
    if(err){
      sendJSONResponse(res, 400, err)
    }
    var comment = {comment: req.body.comment, user:req.payload.email}
    post.comments.push(comment);
    post.save(function(err){
      if(err){
        sendJSONResponse(res, 400, err);
      }
      sendJSONResponse(res, 201, post)
    })
  })
}
