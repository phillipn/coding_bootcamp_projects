(function () {

  angular
    .module('auth')
    .directive('navigation', navigation);

  function navigation () {
    return {
      restrict: 'EA',
      templateUrl: '../views/nav_template.html',
      controller: 'navigationCtrl as navvm'
    };
  }

})();
