angular.module('store')
  .directive('navigation', function(){
    return {
      restrict: 'EA',
      templateUrl: './views/navigation.html',
      controller: 'navigationController as navvm'
    }
  })
