var mongoose = require('mongoose');

var PostSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Post name cannot be blank']
  },
  post: {
    type: String,
    required: [true, 'Post content cannot be blank']
  }
},
{
  timestamps: true
})

module.exports = mongoose.model('Post', PostSchema)
