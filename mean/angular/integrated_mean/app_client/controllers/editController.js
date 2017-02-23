angular.module('integr8')
  .controller('editController', ['$scope', '$location', '$filter', 'userFactory', '$routeParams', '$cacheFactory', function($scope, $location, $filter, userFactory, $routeParams, $cacheFactory){
    $scope.error = false;

    userFactory.getUser($routeParams.user_id).then(function(user){
      $scope.user = user.data;
      $scope.user.birthday = new Date(user.data.birthday);
    })

    $scope.updateUser = function(){
      $scope.submitted = true;
      if(!$scope.user.first_name || !$scope.user.last_name || !$scope.user.birthday){
        $scope.error = true;
        return false;
      }
      if($scope.user.birthday > new Date()){
        $scope.max_date_error  = 'Date needs to be in the past'
        return false;
      }
      userFactory.updateUser($scope.user).then(function(user){
        var $httpDefaultCache = $cacheFactory.get('$http');
        // how to look at cached user info.
        // console.log($httpDefaultCache.get('/api/users/58a611853792b1e790d1b271'));
        $httpDefaultCache.removeAll();
        $location.url('/');
      })
    }

    $scope.action = $scope.updateUser;
  }])
