angular.module('integr8')
  .directive('userdisplay', function(){
    return {
      restrict: 'EA',
      templateUrl: '../../views/_user.html'
    }
  })
