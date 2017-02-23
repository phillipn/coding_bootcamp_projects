angular.module('belt')
  .controller('navController', ['$scope', 'authFactory', '$location', function($scope, authFactory, $location){
    $scope.logout = function(){
      authFactory.logout()
      $location.url('/')
    }
  }])
