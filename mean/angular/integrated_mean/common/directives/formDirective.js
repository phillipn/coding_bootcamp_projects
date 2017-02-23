angular.module('integr8')
  .directive('formreuse', function(){
    return {
      restrict: 'EA',
      templateUrl: '../../views/_form.html'
    }
  })
