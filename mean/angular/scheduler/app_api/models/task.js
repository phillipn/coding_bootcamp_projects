var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  startTime: {
    type: Date,
    required: true,
    min: [new Date(), 'Min date error']
  },
  endTime: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});


TaskSchema.pre('validate', function(done){
  if(this.startTime > this.endTime){
    done(Error('End date cannot be before start date'));
  } else {
    done()
  }
});

module.exports = mongoose.model('Task', TaskSchema)
