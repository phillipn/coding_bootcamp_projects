angular.module('integr8', ['ngRoute', 'ngMessages']);

angular.module('integr8').config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: './views/index.html',
      controller: 'indexController'
    })
    .when('/new', {
      templateUrl: './views/new.html',
      controller: 'newController'
    })
    .when('/show/:user_id', {
      templateUrl: './views/show.html',
      controller: 'showController'
    })
    .when('/edit/:user_id', {
      templateUrl: './views/edit.html',
      controller: 'editController'
    })
    .otherwise('/')
})
