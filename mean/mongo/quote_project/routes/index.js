var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller');

router.get('/', controller.form);
router.post('/', controller.postForm);

module.exports = router;
