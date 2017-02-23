angular.module('todo')
  .factory('taskFactory', function($http){
    return {
      getTasks: function(){
        return $http.get('/api/tasks');
      },
      createTask: function(criteria){
        return $http.post('/api/tasks', criteria);
      },
      delete: function(task){
        return $http.delete('/api/tasks/' + task._id);
      },
      update: function(task){
        return $http.put('/api/tasks/' + task._id);
      }
    }
  })
