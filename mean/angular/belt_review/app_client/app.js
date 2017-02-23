angular.module('belt', ['ngRoute', 'ngMessages', 'ngCookies']);

angular.module('belt').config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: './templates/login.html',
      controller: 'loginCtrl'
    })
    .when('/dashboard', {
      templateUrl: './templates/dash.html',
      controller: 'dashCtrl'
    })
    .when('/user/:username', {
      templateUrl: './templates/profile.html',
      controller: 'profileCtrl'
    })
    .when('/questions/:question_id', {
      templateUrl: './templates/question.html',
      controller: 'questionCtrl'
    })
    .otherwise('/')
})
