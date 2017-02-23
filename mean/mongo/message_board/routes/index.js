var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller');

router.get('/', controller.index);
router.post('/post', controller.postPost);
router.post('/:post_id/comment', controller.postComment);

module.exports = router;
