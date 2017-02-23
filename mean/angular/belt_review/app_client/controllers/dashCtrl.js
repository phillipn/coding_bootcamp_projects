angular.module('belt')
  .controller('dashCtrl', ['$scope', '$location', 'contentFactory', '$cookies', function($scope, $location, contentFactory, $cookies){
    $scope.usernameCookie = $cookies.get('username');

    contentFactory.getQuestions().then(function(questions){
      if(!$cookies.get('username')){
        return $location.url('/')
      }
      $scope.questions = questions.data
    }).catch(function(err){
      console.log(err);
    })

    $scope.askQuestion = function(){
      contentFactory.askQuestion({
        question: $scope.question,
        category: $scope.category,
        username: $cookies.get('username')
      }).then(function(question){
        console.log(question);
        $scope.questions.push(question.data);
      }).catch(function(err){
        console.log(err);
      })
    }
}])
