angular.module('belt')
  .controller('profileCtrl', ['$scope', '$location', '$cookies', 'contentFactory', '$route', function($scope, $location, $cookies, contentFactory, $route){
    $scope.username = $route.current.params.username

    contentFactory.getQuestionCount($route.current.params.username).then(function(obj){
      console.log(obj);
      $scope.questionCount = obj.data.count
    }).catch(function(err){
      console.log(err);
    })

    contentFactory.getAnswerCount($route.current.params.username).then(function(obj){
      $scope.answerCount = obj.data.count
    }).catch(function(err){
      console.log(err);
    })

    contentFactory.getCommentCount($route.current.params.username).then(function(obj){
      $scope.commentCount = obj.data.count
    }).catch(function(err){
      console.log(err);
    })
}])
