angular.module('wall')
  .controller('authController', ['$scope', 'authFactory', '$location', function($scope, authFactory, $location){
    $scope.isLoggedIn = authFactory.isLoggedIn();

    $scope.currentUser = authFactory.currentUser();

    $scope.register = function(){
      authFactory.register({
        email: $scope.email,
        password: $scope.password
      }).then(function(user){
        authFactory.saveToken(user.data.token);
        $location.url('/wall')
      }).catch(function(err){
        $scope.email_exists = true;
      })
    }

    $scope.login = function(){
      authFactory.login({
        email: $scope.login_email,
        password: $scope.login_password
      }).then(function(user){
        authFactory.saveToken(user.data.token);
        $location.url('/wall')
      }).catch(function(err){
        $scope.authFail = err.data.error;
      })
    }

    $scope.logout = function(){
      authFactory.logout();
      $location.url('/login');
    }
  }])
