var models = require('../models/models')
var Post = models.post
var Comment = models.comment

var renderTemplate = function(res, status, template, data){
  if(!data){
    data = {};
  }
  res.status(status);
  res.render(template, data);
}

module.exports = {
  index: function(req, res){
    Post.find({}).sort({createdAt: -1}).exec(function(err, posts){
      renderTemplate(res, 200, 'index', {'posts': posts})
    })
  },

  postPost: function(req, res){
    Post.create({name: req.body.name, post: req.body.post}, function(err, post){
      var errors = [];
      if(err){
        for (field in err.errors) {
          errors.push(err.errors[field].message);
        }
        Post.find({}, function(err, posts){
          renderTemplate(res, 200, 'index', {'posts': posts, 'post_errors': errors})
        })
      } else{
        res.redirect('/')
      }
    })
  },

  postComment: function(req, res){
    Post.findOne({_id: req.params.post_id}, function(err, post){
      var dataObject = {};
      var errors = [];
      if(err){
        Post.find({}, function(err, posts){
          renderTemplate(res, 200, 'index', {'posts': posts})
        })
      } else {
        var comment = new Comment({
          name: req.body.name,
          comment: req.body.comment
        });
        post.comments.push(comment);
        post.save(function(commentErr){
          Post.find({}).sort({createdAt: -1}).exec(function(err, posts){
            dataObject['posts'] = posts;
            if(commentErr){
              dataObject['comment_errors'] = String(post._id);
            }
            renderTemplate(res, 200, 'index', dataObject);
          })
        })
      }
    })
  }
}
