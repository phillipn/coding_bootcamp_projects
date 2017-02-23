angular.module('scheduler')
  .controller('authController', ['$scope', 'theFactory', '$cookies', '$location', function($scope, theFactory, $cookies, $location){
    $scope.authenticate = function(){
      theFactory.login({'username': $scope.username}).then(function(user){
        $cookies.put('username', user.data.username);
        $location.url('/addEvent');
      }).catch(function(err){
        $cookies.put('username', '');
        console.log(err);
      })
    }
  }])
