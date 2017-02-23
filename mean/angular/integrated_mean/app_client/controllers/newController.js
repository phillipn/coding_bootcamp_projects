angular.module('integr8')
  .controller('newController', ['$scope', '$location', 'userFactory', '$cacheFactory', function($scope, $location, userFactory, $cacheFactory){
    $scope.user = {};
    $scope.error= false;
    $scope.max_date = new Date()

    $scope.addUser = function(){
      if(!$scope.user.hasOwnProperty('first_name') || !$scope.user.hasOwnProperty('last_name') || !$scope.user.hasOwnProperty('birthday')){
        $scope.error = true;
        return false;
      }
      // if($scope.user.birthday > new Date()){
      //   $scope.max_date_error  = 'Date needs to be in the past'
      //   return false;
      // }
      userFactory.addUser($scope.user).then(function(user){
        var $httpDefaultCache = $cacheFactory.get('$http');
        // example of how to look at cache
        // console.log($httpDefaultCache.get('/api/users'));
        $httpDefaultCache.removeAll();
        $location.url('/');
      }).catch(function(err){
        $scope.max_date_error = err.data.errors.birthday.message;
      })
    }

    $scope.action = $scope.addUser;
  }])
