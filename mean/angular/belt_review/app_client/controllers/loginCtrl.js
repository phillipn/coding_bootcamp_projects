angular.module('belt')
  .controller('loginCtrl', ['$scope', '$location', 'authFactory', '$cookies', function($scope, $location, authFactory, $cookies){

    $scope.login = function(){
      authFactory.login({
        username: $scope.username
      }).then(function(user){
        $cookies.put('username', user.data.username);
        $location.url('/user/' + user.data.username);
      }).catch(function(err){
        console.log(err);
      })
    }
}])
