var express = require('express');
var router = express.Router();
var authController = require('../controllers/authController.js')
var profileController = require('../controllers/profileController.js')
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

router.post('/register', authController.register)
router.post('/login', authController.login)

router.get('/profile', auth, profileController.getProfile)

module.exports = router;
