var QuoteSchema = mongoose.Schema({
  text: {
    type: String,
    required: [true, 'Text cannot be blank']
  },
  author: {
    type: String,
    required: [true, 'Author cannot be blank']
  }
},
{
  timestamps: true
})

module.exports = mongoose.model('Quote', QuoteSchema);
