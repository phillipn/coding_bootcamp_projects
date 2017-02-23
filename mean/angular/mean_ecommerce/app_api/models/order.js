var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
  _customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  },
  _product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Order', OrderSchema)
