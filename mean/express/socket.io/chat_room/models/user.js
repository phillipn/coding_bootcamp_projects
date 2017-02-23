var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Post name cannot be blank']
  },
  present: {
    type: Boolean
  }
},
{
  timestamps: true
})

module.exports = mongoose.model('User', UserSchema)
