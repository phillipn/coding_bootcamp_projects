(function () {

  angular
    .module('wall')
    .controller('navigationCtrl', navigationCtrl);

  navigationCtrl.$inject = ['$location', 'authFactory'];
  function navigationCtrl($location, authFactory) {
    var vm = this;

    vm.currentPath = $location.path();

    vm.isLoggedIn = authFactory.isLoggedIn();

    vm.currentUser = authFactory.currentUser();

    vm.logout = function() {
      authFactory.logout();
      $location.path('/');
    };

  }
})();
