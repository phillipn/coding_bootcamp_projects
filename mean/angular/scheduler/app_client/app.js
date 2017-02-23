angular.module('scheduler', ['ngRoute', 'ngMessages', 'ngCookies']);

angular.module('scheduler').config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: './views/auth.html',
      controller: 'authController'
    })
    .when('/addEvent', {
      templateUrl: './views/addEvent.html',
      controller: 'addEventController'
    })
    .when('/events', {
      templateUrl: './views/events.html',
      controller: 'eventsController'
    })
    .otherwise('/')
})
