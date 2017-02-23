var express = require('express');
var router = express.Router();
var authCtrl = require('../controllers/authCtrl.js');
var contentCtrl = require('../controllers/contentCtrl.js');

router.post('/users', authCtrl.login)

router.get('/questions', contentCtrl.getQuestions);
router.post('/questions', contentCtrl.askQuestion);
router.get('/questions/:question_id', contentCtrl.getQuestion);

router.post('/answers', contentCtrl.addAnswer);
router.get('/answers/:username', contentCtrl.getUserAnswerCount);
router.post('/answers/:answer_id', contentCtrl.addComment);
router.put('/answers/:answer_id/upvote', contentCtrl.upvote);
router.put('/answers/:answer_id/downvote', contentCtrl.downvote);

router.get('/comments/:username', contentCtrl.getUserCommentCount);
router.get('/users/:username/questions', contentCtrl.getUserQuestionCount);


module.exports = router
