var mongoose = require('mongoose');

var PersonSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name cannot be blank']
  }
},
{
  timestamps: true
})

module.exports = mongoose.model('Person', PersonSchema);
