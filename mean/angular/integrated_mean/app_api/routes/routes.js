var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController')

router.get('/users', usersController.index)
router.post('/users', usersController.create)
router.get('/users/:user_id', usersController.show)
router.put('/users/:user_id', usersController.update)
router.delete('/users/:user_id', usersController.delete)

module.exports = router;
