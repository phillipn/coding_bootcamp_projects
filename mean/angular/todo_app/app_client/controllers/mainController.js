angular.module('todo')
  .controller('mainController', function($scope, taskFactory){
    taskFactory.getTasks().then(function(data){
      $scope.todo = [];
      $scope.doing = [];
      $scope.done = [];

      for (var i = 0; i < data.data.length; i++) {
        if(data.data[i].status == 'todo'){
          $scope.todo.push(data.data[i]);
        } else if(data.data[i].status == 'doing'){
          $scope.doing.push(data.data[i]);
        } else {
          $scope.done.push(data.data[i]);
        }
      }
    })

    $scope.createTask = function(){
      taskFactory.createTask({criteria: $scope.criteria}).then(function(data){
        $scope.todo.push(data.data);
      })
    }

    $scope.delete = function(task){
      taskFactory.delete(task).then(function(err){
        var index = $scope.done.indexOf(task);
        $scope.done.splice(index, 1);
      })
    }

    $scope.changeStatus = function(task){
      taskFactory.update(task).then(function(data){
        if(task.status == 'todo'){
          task.status = 'doing';
          var index = $scope.todo.indexOf(task);
          $scope.todo.splice(index, 1);
          $scope.doing.push(task);
        } else {
          task.status = 'done';
          var index = $scope.doing.indexOf(task);
          $scope.doing.splice(index, 1);
          $scope.done.push(task);
        }
      })
    }
  })
