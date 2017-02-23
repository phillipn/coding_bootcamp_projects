angular.module('store')
  .controller('dashboardController', ['$scope', 'storeFactory', function($scope, storeFactory){
    storeFactory.getSomeProducts().then(function(products){
      $scope.products = products.data;
    }).catch(function(err){
      console.log(err);
    })

    storeFactory.getRecentOrders().then(function(orders){
      console.log(orders.data);
      $scope.orders = orders.data
    }).catch(function(err){
      console.log(err);
    })

    storeFactory.getNewCustomers().then(function(customers){
      $scope.customers = customers.data;
    }).catch(function(err){
      console.log(err);
    })
  }])
