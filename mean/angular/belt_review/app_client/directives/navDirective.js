angular.module('belt')
  .directive('navigation', function(){
    return {
      restrict: 'EA',
      templateUrl: '../templates/nav.html',
      controller: 'navController'
    }
  })
