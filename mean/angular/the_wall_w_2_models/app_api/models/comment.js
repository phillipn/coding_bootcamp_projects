var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  _post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  },
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

module.exports = mongoose.model('Comment', CommentSchema)
