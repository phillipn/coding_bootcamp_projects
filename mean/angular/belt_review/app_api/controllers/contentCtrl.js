var mongoose = require('mongoose');
var User = require('../models/user.js');
var Question = require('../models/question.js');
var Answer = require('../models/answer.js');
var Comment = require('../models/comment.js');

var sendJSONResponse = function(res, status, data){
  res.status(status);
  res.json(data);
}

module.exports.getQuestions = function(req, res){
  Question.find({}, function(err, questions){
    if(err){
      console.log(err);
      return sendJSONResponse(res, 400, err);
    } else {
      return sendJSONResponse(res, 200, questions);
    }
  })
}

module.exports.askQuestion = function(req, res){
  console.log(req.body);
  Question.create({
    question: req.body.question,
    category: req.body.category,
    username: req.body.username
  }, function(err, question){
    if(err){
      console.log(err);
      return sendJSONResponse(res, 400, err);
    } else {
      console.log(question);
      return sendJSONResponse(res, 201, question);
    }
  })
}

module.exports.getUserQuestionCount = function(req, res){
  console.log(req.params.username);
  Question.count({
    username: req.params.username
  }, function(err, count){
    if(err){
      console.log(err);
    } else {
      console.log(count);
      sendJSONResponse(res, 200, {count: count})
    }
  })
}

module.exports.getUserCommentCount = function(req, res){
  Comment.count({
    username: req.params.username
  }, function(err, count){
    if(err){
      console.log(err);
    } else {
      console.log(count);
      sendJSONResponse(res, 200, {count: count})
    }
  })
}

module.exports.getUserAnswerCount = function(req, res){
  Answer.count({
    username: req.params.username
  }, function(err, count){
    if(err){
      console.log(err);
    } else {
      console.log(count);
      sendJSONResponse(res, 200, {count: count})
    }
  })
}

module.exports.getQuestion = function(req, res){
  console.log('in server');
  Question.findOne({_id: req.params.question_id}).populate({
    path: 'answers',
    model: 'Answer',
    populate: {
      path: 'comments',
      model: 'Comment'
    }
}).exec(function(err, question){
    console.log(question);
    if(err){
      sendJSONResponse(res, 400, err);
    } else {
      sendJSONResponse(res, 200, question);
    }
  })
}

module.exports.addAnswer = function(req, res){
  console.log(req.body);
  Question.findOne({_id: req.body.question_id}, function(err, question){
    if(err){
      return sendJSONResponse(res, 400, err);
    }
    console.log('question found');
    var answer = new Answer({
      answer: req.body.answer,
      username: req.body.username
    })
    answer.save(function(err){
      if(err){
        return sendJSONResponse(res, 400, err);
      }
      console.log('answer saved');
      question.answers.push(answer);
      question.save(function(err){
        if(err){
          return sendJSONResponse(res, 400, err);
        }
        console.log('question saved');
        sendJSONResponse(res, 201, answer);
      })
    })
  })
}

module.exports.addComment = function(req, res){
  Answer.findOne({_id: req.params.answer_id}, function(err, answer){
    if(err){
      return sendJSONResponse(res, 400, err);
    }
    console.log('comment found');
    var comment = new Comment({
      comment: req.body.comment,
      username: req.body.username
    });
    comment.save(function(err){
      if(err){
        return sendJSONResponse(res, 400, err);
      }
      console.log('comment saved');
      answer.comments.push(comment);
      answer.save(function(err){
        if(err){
          return sendJSONResponse(res, 400, err);
        }
        console.log('answer saved');
        sendJSONResponse(res, 201, comment);
      })
    })
  })
}

module.exports.upvote = function(req,res){
  Answer.findOne({_id: req.params.answer_id}).populate('comments').exec(function(err, answer){
    if(err){
      return sendJSONResponse(res, 400, err);
    }
    if(answer.downvotes.indexOf(req.params.username) != -1 || answer.upvotes.indexOf(req.params.username) != -1 ){
      return sendJSONResponse(res, 400, 'You have already voted');
    }
    answer.upvotes.push(req.params.username);
    answer.save(function(err, answer){
      if(err){
        return sendJSONResponse(res, 400, err);
      } else {
        sendJSONResponse(res, 201, answer)
      }
    })
  })
}

module.exports.downvote = function(req,res){
  Answer.findOne({_id: req.params.answer_id}).populate('comments').exec(function(err, answer){
    if(err){
      return sendJSONResponse(res, 400, err);
    }
    if(answer.downvotes.indexOf(req.params.username) != -1 || answer.upvotes.indexOf(req.params.username) != -1 ){
      return sendJSONResponse(res, 400, 'You have already voted');
    }
    answer.downvotes.push(req.params.username);
    answer.save(function(err, answer){
      if(err){
        return sendJSONResponse(res, 400, err);
      } else {
        sendJSONResponse(res, 201, answer)
      }
    })
  })
}
