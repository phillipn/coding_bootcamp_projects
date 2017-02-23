angular.module('scheduler')
  .factory('theFactory', ['$http', '$cookies', function($http, $cookies){
    return {
      login: function(obj){
        console.log($cookies.get('username'));
        return $http.post('api/users', obj)
      },
      addEvent: function(event){
        return $http.post('api/events', event)
      },
      getEvents: function(username){
        return $http.get('api/events/' + username)
      }
    }
  }])
