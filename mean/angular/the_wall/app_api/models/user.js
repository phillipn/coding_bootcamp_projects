var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: [8, 'Password must be at least 8 characters']
  }
});

UserSchema.path('email').validate(function(value, done) {
  this.model('User').count({ email: value }, function(err, count) {
    if (err) {
        return done(err);
    }
    // If `count` is greater than zero, "invalidate"
    done(!count);
  });
}, 'Email already exists');

UserSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    exp: parseInt(expiry.getTime() / 1000),
  }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

UserSchema.methods.passwordCheck = function(password){
  return bcrypt.compareSync(password, this.password);
}

UserSchema.methods.hashPassword = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
}

UserSchema.pre('save', function(done){
  this.password = this.hashPassword(this.password);
  done();
});

module.exports = mongoose.model('User', UserSchema)
