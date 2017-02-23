var mongoose = require('mongoose')

var TaskSchema = mongoose.Schema({
  status: {
    type: String,
    required: true,
    enum: ['todo', 'doing', 'done']
  },
  criteria: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Task', TaskSchema);
