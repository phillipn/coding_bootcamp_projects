angular.module('belt')
  .factory('authFactory', ['$http', '$cookies', function($http, $cookies){
    return {
      login: function(obj){
        return $http.post('api/users', obj)
      },
      logout: function(){
        return $cookies.remove('username')
      }
    }
  }])
