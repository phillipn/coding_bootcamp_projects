var express = require('express');
var router = express.Router();
var storeCtrl = require('../controllers/storeCtrl.js');
var multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty();

router.get('/someproducts', storeCtrl.getSomeProducts)
router.get('/recentorders', storeCtrl.getRecentOrders)
router.get('/newcustomers', storeCtrl.getNewCustomers)
router.get('/customers', storeCtrl.getCustomers)
router.post('/customers', storeCtrl.addCustomer)
router.delete('/customers/:id', storeCtrl.deleteCustomer)
router.get('/orders', storeCtrl.getOrders)
router.post('/orders', storeCtrl.addOrder)
router.get('/products', storeCtrl.getProducts)
router.post('/products', storeCtrl.addProduct)
// router.post('/add_image', multipartyMiddleware, storeCtrl.addImage)

module.exports = router
