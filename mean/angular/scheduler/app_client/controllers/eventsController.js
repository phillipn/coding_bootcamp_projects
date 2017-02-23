angular.module('scheduler')
  .controller('eventsController', ['$scope', 'theFactory', '$cookies', function($scope, theFactory, $cookies){
    theFactory.getEvents($cookies.get('username')).then(function(events){
      $scope.events = events.data
      $scope.today = [];
      $scope.tomorrow = [];

      var midnight = new Date();

      midnight.setHours( 24 );
      midnight.setMinutes( 0 );
      midnight.setSeconds( 0 );
      midnight.setMilliseconds( 0 );

      for (var i = 0; i < events.data.length; i++) {
        if(new Date(events.data[i].startTime) < midnight){
          $scope.today.push(events.data[i]);
        } else {
          $scope.tomorrow.push(events.data[i]);
        }
      }
    }).catch(function(err){
      console.log(err);
    })
  }])
