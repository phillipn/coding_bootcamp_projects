var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  answers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Answer'
  }],
  question: {
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

module.exports = mongoose.model('Question', QuestionSchema)
