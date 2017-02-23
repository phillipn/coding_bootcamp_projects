angular.module('store')
  .controller('customerController', ['$scope', 'storeFactory', function($scope, storeFactory){
    storeFactory.getCustomers().then(function(customers){
      console.log(customers);
      $scope.customers = customers.data;
    }).catch(function(err){
      console.log(err);
    })

    $scope.addCustomer = function(){
      storeFactory.addCustomer({
        name: $scope.name
      }).then(function(customer){
        console.log(customer);
        $scope.customers.push(customer.data);
      }).catch(function(err){
        console.log(err);
      })
    }

    $scope.deleteCustomer = function(customer){
      storeFactory.deleteCustomer(customer._id).then(function(){
        var index = $scope.customers.indexOf(customer);
        $scope.customers.splice(index, 1);
      }).catch(function(err){
        console.log(err);
      })
    }
  }])
