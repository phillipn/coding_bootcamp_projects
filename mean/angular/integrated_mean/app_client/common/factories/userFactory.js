angular.module('integr8')
  .factory('userFactory', ['$http', function($http){
    return {
      index: function(){
        return $http.get('/api/users', { cache: true });
      },
      addUser: function(user){
        return $http.post('/api/users', user);
      },
      getUser: function(user_id){
        return $http.get('/api/users/' + user_id, { cache: true });
      },
      updateUser: function(user){
        return $http.put('/api/users/' + user._id, user);
      },
      delete: function(user_id){
        return $http.delete('/api/users/' + user_id);
      }
    }
  }])
