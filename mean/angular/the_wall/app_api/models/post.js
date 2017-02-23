var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

var PostSchema = new mongoose.Schema({
  post: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  comments: [CommentSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Post', PostSchema)
