var mongoose = require('mongoose');
var Person = require('../models/person');

module.exports = {
  index: function(req, res){
    Person.find({}).sort({createdAt: -1}).exec(function(err, people){
      res.json(people);
    })
  },

  new: function(req, res){
    Person.create({name: req.params.name}, function(err, person){
      if(err){
        return res.redirect('/');
      }
      res.json(person);
    })
  },

  delete: function(req, res){
    Person.remove({name: req.params.name}, function(err){
      res.redirect('/');
    })
  },

  show: function(req, res){
    Person.findOne({name: req.params.name}, function(err, person){
      if(err){
        return res.redirect('/');
      }
      res.json(person);
    })
  }
}
