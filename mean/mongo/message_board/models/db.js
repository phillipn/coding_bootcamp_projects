var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/message_board')

require('./models.js')
