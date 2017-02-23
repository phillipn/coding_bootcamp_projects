var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/auth')

require('./user.js')
