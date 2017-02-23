var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller');

router.get('/', controller.index);
router.get('/:name', controller.show);
router.get('/new/:name', controller.new);
router.get('/remove/:name', controller.delete);

module.exports = router;
