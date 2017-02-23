var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo_list');

require('./task.js');
