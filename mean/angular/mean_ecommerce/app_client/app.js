angular.module('store', ['ngRoute', 'ngMessages', 'ngFileUpload']);

angular.module('store').config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: './views/dashboard.html',
      controller: 'dashboardController',
      activetab: 'dashboard'
    })
    .when('/products', {
      templateUrl: './views/products.html',
      controller: 'productController',
      activetab: 'products'
    })
    .when('/orders', {
      templateUrl: './views/orders.html',
      controller: 'orderController',
      activetab: 'orders'
    })
    .when('/customers', {
      templateUrl: './views/customers.html',
      controller: 'customerController',
      activetab: 'customers'
    })
    .when('/settings', {
      templateUrl: './views/settings.html',
      controller: 'settingsController',
      activetab: 'settings'
    })
    .otherwise('/')
})

// protect the profile route from unauthenticated users
// angular.module('store').run(function($rootScope, $location, authFactory) {
//   $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
//     if ($location.path() === '/profile' && !authFactory.isLoggedIn()) {
//       $location.path('/');
//     }
//   });
// })
