angular.module('auth')
  .factory('profileFactory', ['$http', '$window', 'authFactory', function($http, $window, authFactory){
    return {
      getProfile: function(){
        return $http.get('/api/profile', {
          headers: {
            Authorization: 'Bearer '+ authFactory.getToken()
          }
        })
      }
    }
  }])
