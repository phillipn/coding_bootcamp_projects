var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/schedulerCtrl.js');
var session = require('express-session');

router.post('/users', ctrl.auth)
router.get('/events/:username', ctrl.getEvents)
router.post('/events', ctrl.addEvent)

module.exports = router
