angular.module('belt')
  .factory('contentFactory', ['$http', function($http){
    return {
      getQuestions: function(){
        return $http.get('api/questions')
      },
      askQuestion: function(obj){
        return $http.post('api/questions', obj)
      },
      getQuestionCount: function(username){
        return $http.get('/api/users/' + username + '/questions')
      },
      getAnswerCount: function(username){
        return $http.get('/api/answers/' + username)
      },
      getCommentCount: function(username){
        return $http.get('/api/comments/' + username)
      },
      getQuestion: function(question_id){
        return $http.get('api/questions/' + question_id)
      },
      addAnswer: function(obj){
        return $http.post('/api/answers', obj)
      },
      addComment: function(answer_id, obj){
        return $http.post('/api/answers/' + answer_id, obj);
      },
      upvote: function(answer_id, obj){
        return $http.put('/api/answers/' + answer_id + '/upvote', obj)
      },
      downvote: function(answer_id, obj){
        return $http.put('/api/answers/' + answer_id + '/downvote', obj)
      }
    }
}])
