var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/generic')

require('./models.js')
