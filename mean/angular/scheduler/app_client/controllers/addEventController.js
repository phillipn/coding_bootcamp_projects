angular.module('scheduler')
  .controller('addEventController', ['$scope', 'theFactory', '$cookies', '$location', function($scope, theFactory, $cookies, $location){
    $scope.username = $cookies.get('username');

    $scope.addEvent = function(){
      var now = new Date();
      var startOfToday= new Date();

      startOfToday.setHours( 0 );
      startOfToday.setMinutes( 0 );
      startOfToday.setSeconds( 0 );
      startOfToday.setMilliseconds( 0 );
      console.log(startOfToday);
      console.log($scope.date);

      if($scope.date < startOfToday){
        $scope.badDate = 'That time has passed my friend';
        return false;
      }

      if($scope.startTime > $scope.endTime){
        $scope.badTime = 'Start needs to be before end';
      }

      theFactory.addEvent({
        date: $scope.date,
        startTime: $scope.startTime,
        endTime: $scope.endTime,
        description: $scope.description,
        username: $scope.username
      }).then(function(events){
        $location.url('/events')
      }).catch(function(err){
        console.log(err);
      })
    }
  }])
