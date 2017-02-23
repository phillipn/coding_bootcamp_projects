var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Comment', CommentSchema)
