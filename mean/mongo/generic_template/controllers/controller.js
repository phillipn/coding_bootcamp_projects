// var models = require('../models/models')
// var Post = models.post
// var Comment = models.comment

var sendJSONResponse = function(res, status, template, data){
  if(!data){
    data = {};
  }
  console.log(data);
  res.status(status);
  res.render(template, data);
}

module.exports = {

}
