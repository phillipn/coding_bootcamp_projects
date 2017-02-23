angular.module('integr8')
  .controller('indexController', ['$scope', 'userFactory', '$cacheFactory', function($scope, userFactory, $cacheFactory){
    userFactory.index().then(function(users){
      $scope.users = users.data;
    })
    $scope.delete = function(user_id){
      userFactory.delete(user_id)
      for (var i = 0; i < $scope.users.length; i++) {
        if($scope.users[i]._id == user_id){
          $scope.users.splice(i, 1);
          break;
        }
      }
    }
  }])
