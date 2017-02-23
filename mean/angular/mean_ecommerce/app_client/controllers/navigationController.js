angular.module('store')
  .controller('navigationController', ['$route', '$scope', function($route, $scope){
    $scope.$route = $route;
    // ALTERNATIVE TO USING $ROUTE TO CHANGE ACTIVE TABS
    // navvm.selected = 'dashboard';
    // navvm.toggle = function(tag){
    //   navvm.selected = tag;
    // }
  }])
