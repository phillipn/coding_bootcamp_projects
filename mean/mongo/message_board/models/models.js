var mongoose = require('mongoose');

var CommentSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Comment name cannot be blank']
  },
  comment: {
    type: String,
    required: [true, 'Comment content cannot be blank']
  }
},
{
  timestamps: true
})

var PostSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Post name cannot be blank']
  },
  post: {
    type: String,
    required: [true, 'Post content cannot be blank']
  },
  comments: [CommentSchema]
},
{
  timestamps: true
})

module.exports = {
  post: mongoose.model('Post', PostSchema),
  comment: mongoose.model('Comment', CommentSchema)
}
