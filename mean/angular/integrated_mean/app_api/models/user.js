var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    required: true,
    max: [new Date(), 'Max date error'],
    // lol ww2 style
    validate: {
      validator: function(v) {
        if(v > new Date(40,01,01)){
          return false;
        } else {
          return true;
        }
      },
      message: 'You need to be born before 1940!'
    },
  }
});

module.exports = mongoose.model('User', UserSchema)
