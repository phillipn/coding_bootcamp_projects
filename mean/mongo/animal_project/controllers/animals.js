var mongoose = require('mongoose');
var Animal = mongoose.model('Animal')

var sendJSONresponse = function(res, template, data) {
  res.render(template, data);
};

module.exports.animals = function(req, res){
  Animal.find({}, function(err, animals){
    sendJSONresponse(res, 'index', {animals: animals})
  })
}

module.exports.animal = function(req, res){
  var animal_id = req.params.id;
  Animal.findOne({_id: animal_id}, function(err, animal){
    if(err){
      res.redirect('/');
      return;
    }
    sendJSONresponse(res, 'show', animal)
  })
}

module.exports.animalNew = function(req, res){
  sendJSONresponse(res, 'new', {})
}

module.exports.animalCreate = function(req, res){
  var data = req.body;
  Animal.create({name: req.body.name, age: req.body.age}, function(err, animal){
    var errors = [];
    if(err){
      for (field in err.errors) {
        errors.push(err.errors[field].message);
      }
      sendJSONresponse(res, 'new', {errors: errors})
      return
    }
    res.redirect('/animals/' + animal.id)
  })
}

module.exports.animalEdit = function(req, res){
  var animal_id = req.params.id;
  Animal.findOne({_id: animal_id}, function(err, animal){
    if(err){
      res.redirect('/');
      return;
    }
    sendJSONresponse(res, 'edit', animal)
  })
}

module.exports.animalUpdate = function(req, res){
  Animal.findOne({_id: req.params.id}, function(err, animal){
    if(err){
      res.redirect('/');
      return;
    }
    animal.name = req.body.name
    animal.age = req.body.age
    animal.save(function(err){
      res.redirect('/')
    })
  })
}

module.exports.animalDelete = function(req, res){
  var animal_id = req.params.id;
  Animal.remove({_id: animal_id}, function(err){
    if(err){
      res.redirect('/');
      return;
    }
    res.redirect('/')
    return
  })
}
