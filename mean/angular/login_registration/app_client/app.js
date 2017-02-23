angular.module('auth', ['ngRoute', 'ngMessages']);

angular.module('auth').config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: './views/auth_form.html',
      controller: 'indexController'
    })
    .when('/profile', {
      templateUrl: './views/profile.html',
      controller: 'profileController'
    })
    .otherwise('/')
})

// protect the profile route from unauthenticated users
angular.module('auth').run(function($rootScope, $location, authFactory) {
  $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
    if ($location.path() === '/profile' && !authFactory.isLoggedIn()) {
      $location.path('/');
    }
  });
})
