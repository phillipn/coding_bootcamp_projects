var express = require('express');
var router = express.Router();
var authController = require('../controllers/authController.js')
var wallController = require('../controllers/wallController.js')
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

router.post('/register', authController.register);
router.post('/login', authController.login);

router.get('/posts', wallController.getPosts);
router.post('/posts', auth, wallController.addPost);
router.post('/posts/:post_id/', auth, wallController.addComment);


module.exports = router;
