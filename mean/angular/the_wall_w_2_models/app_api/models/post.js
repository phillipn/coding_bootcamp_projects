var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  post: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Post', PostSchema)
