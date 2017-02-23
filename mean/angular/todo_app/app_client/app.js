angular.module('todo', ['ngRoute']);

angular.module('todo').config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: './views/index.html',
    controller: 'mainController'
  })
})
