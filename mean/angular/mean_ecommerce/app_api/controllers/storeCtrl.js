var mongoose = require('mongoose');
var Product = require('../models/product.js');
var Order = require('../models/order.js');
var Customer = require('../models/customer.js');
var fs = require('fs');

var sendJSONResponse = function(res, status, data){
  res.status(status);
  res.json(data);
}

module.exports.getSomeProducts = function(req, res){
  Product.find().limit(5).exec(function(err, products){
    sendJSONResponse(res, 200, products)
  })
}

module.exports.getRecentOrders = function(req, res){
  Order.find().sort({createdAt: -1}).limit(3).populate('_customer').populate('_product').exec(function(err, orders){
    sendJSONResponse(res, 200, orders);
  })
}

module.exports.getNewCustomers = function(req, res){
  Customer.find().sort({createdAt: -1}).limit(3).exec(function(err, customers){
    sendJSONResponse(res, 200, customers);
  })
}

module.exports.getCustomers = function(req, res){
  Customer.find({}, function(err, customers){
    sendJSONResponse(res, 200, customers);
  })
}

module.exports.addCustomer = function(req, res){
  Customer.create({name: req.body.name}, function(err, customer){
    sendJSONResponse(res, 200, customer);
  })
}

module.exports.deleteCustomer = function(req, res){
  Customer.remove({_id: req.params.id}, function(err){
    if(err){
      console.log(err);
      sendJSONResponse(res, 404, err);
    }
    sendJSONResponse(res, 200, '');
  })
}

module.exports.getOrders = function(req, res){
  Order.find({}).populate('_customer').populate('_product').exec(function(err, orders){
    sendJSONResponse(res, 200, orders);
  })
}

module.exports.addOrder = function(req, res){
  Product.findOne({_id: req.body.product_id}, function(err, product){
    if(err){
      sendJSONResponse(res, 400, err);
    }
    if(product.quantity < req.body.quantity){
      return sendJSONResponse(res, 400, 'Not available')
    }
    product.quantity -= req.body.quantity;
    product.save(function(err){
      if(err){
        sendJSONResponse(res, 400, err);
      }
      var order  = new Order({
        _customer: req.body.customer_id,
        _product: req.body.product_id,
        quantity: req.body.quantity
      })
      order.save(function(err, order){
        console.log(order);
        if(err){
          sendJSONResponse(res, 400, err);
        }
        sendJSONResponse(res, 201, order)
      })
    })
  })
}

module.exports.getProducts = function(req, res){
  Product.find({quantity: {$gte: 0}}, function(err, products){
    if(err){
      sendJSONResponse(res, 400, err);
    }
    sendJSONResponse(res, 200, products)
  })
}

module.exports.addProduct = function(req, res){
  var split = req.body.image.split(",");
  var ext;

  if(split[0] == 'data:image/png;base64'){
    ext = '.png'
  } else {
    ext = '.jpg'
  }

  if (split.length === 1) {
      image = split[0];
  } else {
      image = split[1];
  }

  Product.create({
    name: req.body.name,
    description: req.body.description,
    quantity: req.body.quantity
  }, function(err, product){
    if(err){
      return sendJSONResponse(res, 400, err);
    }
    fs.writeFile(__dirname + '/../../app_client/static/images/' + product._id + ext, image, "base64", function (writeErr) {
      console.log(writeErr);
      product.image_path = product._id + ext;
      product.save(function(err, product){
        sendJSONResponse(res, 201, product);
      })
    })
  });
}
