var mongoose = require('mongoose');

var AnswerSchema = new mongoose.Schema({
  answer: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  upvotes: [{
    type: String
  }],
  downvotes: [{
    type: String,
    default: 0
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Answer', AnswerSchema)
