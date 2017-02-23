angular.module('integr8')
  .controller('showController', ['$scope', '$location', 'userFactory', '$routeParams', function($scope, $location, userFactory, $routeParams){
    console.log($routeParams.user_id);
    userFactory.getUser($routeParams.user_id).then(function(user){
      $scope.user = user.data;
    })
    $scope.delete = function(user_id){
      console.log(user_id);
      userFactory.delete(user_id).then(function(){
        $location.url('/');
      })
    }
  }])
