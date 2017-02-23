angular.module('wall', ['ngRoute', 'ngMessages']);

angular.module('wall').config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: './views/auth_form.html',
      controller: 'authController'
    })
    .when('/wall', {
      templateUrl: './views/wall.html',
      controller: 'wallController'
    })
    .otherwise('/')
})

// protect the profile route from unauthenticated users
angular.module('wall').run(function($rootScope, $location, authFactory) {
  $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
    if ($location.path() === '/wall' && !authFactory.isLoggedIn()) {
      $location.path('/');
    }
  });
})
