var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Customer', CustomerSchema)
