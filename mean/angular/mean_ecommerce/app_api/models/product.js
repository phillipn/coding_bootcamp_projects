var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  image_path: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema)
