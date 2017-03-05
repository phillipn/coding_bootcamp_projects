angular.module('belt')
  .controller('questionCtrl', ['$scope', '$route', '$location', 'authFactory', 'contentFactory', '$cookies', function($scope, $route, $location, authFactory, contentFactory, $cookies){

    $scope.getQuestion = function(){
      contentFactory.getQuestion($route.current.params.question_id).then(function(question){
        if(!$cookies.get('username')){
          return $location.url('/')
        }
        $scope.question = question.data;
      }).catch(function(err){
        console.log(err);
      })
    }

    $scope.getQuestion();

    $scope.addAnswer = function(){
      contentFactory.addAnswer({
        question_id: $route.current.params.question_id,
        answer: $scope.answer,
        username: $cookies.get('username')
      }).then(function(answer){
        $scope.question.answers.push(answer.data);
      }).catch(function(err){
      })
    }

    $scope.addComment = function(answer, comment){
      contentFactory.addComment(answer._id, {
        comment: comment,
        username: $cookies.get('username')
      }).then(function(comment){
        answer.comments.push(comment.data);
      }).catch(function(err){
        console.log(err.data);
        $scope.alreadyCommented = err.data
      })
    }

    $scope.upvote = function(answer){
      contentFactory.upvote(answer._id, {username: $cookies.get('username')}).then(function(revisedAnswer){
        // Alternative
        //$scope.getQuestion();
        var index = $scope.question.answers.indexOf(answer)
        $scope.question.answers[index] = revisedAnswer.data;

      }).catch(function(err){
        $scope.alreadyVoted = err.data
      })
    }

    $scope.downvote = function(answer){
      contentFactory.downvote(answer._id, {username: $cookies.get('username')}).then(function(revisedAnswer){
        var index = $scope.question.answers.indexOf(answer)
        $scope.question.answers[index] = revisedAnswer.data;
      }).catch(function(err){
        $scope.alreadyVoted = err.data
      })
    }
}])
