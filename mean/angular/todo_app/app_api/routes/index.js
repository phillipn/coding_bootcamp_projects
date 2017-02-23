var express = require('express');

var router = express.Router();

var taskController = require('../controllers/taskController.js')

router.get('/tasks', taskController.index)
router.post('/tasks', taskController.create)
router.put('/tasks/:id', taskController.update)
router.delete('/tasks/:id', taskController.delete)

module.exports = router
