angular.module('auth')
  .controller('profileController',['$scope', 'authFactory', 'profileFactory', function($scope, authFactory, profileFactory){
    profileFactory.getProfile().then(function(user){
      console.log(user.data);
      $scope.user = user.data
    })
  }])
