var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/animals_site')

var AnimalSchema = new mongoose.Schema({
  name: String,
  age: Number
})

module.exports = mongoose.model('Animal', AnimalSchema);
