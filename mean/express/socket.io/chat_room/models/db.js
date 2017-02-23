var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/chat_room')

require('./post.js')
require('./user.js')
