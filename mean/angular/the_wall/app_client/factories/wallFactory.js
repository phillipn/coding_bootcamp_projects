angular.module('wall')
  .factory('wallFactory', ['$http', '$window', 'authFactory', function($http, $window, authFactory){
    return {
      addPost: function(post){
        return $http.post('/api/posts', post, {
          headers: {
            Authorization: 'Bearer '+ authFactory.getToken()
          }
        })
      },
      getPosts: function(){
        return $http.get('/api/posts')
      },
      addComment: function(comment, post_id){
        return $http.post('/api/posts/' + post_id + '/', {comment: comment}, {
          headers: {
            Authorization: 'Bearer '+ authFactory.getToken()
          }
        })
      }
    }
  }])
