angular.module('store')
  .controller('orderController', ['$scope', 'storeFactory', function($scope, storeFactory){
    storeFactory.getCustomers().then(function(customers){
      $scope.customers = customers.data;
    }).catch(function(err){
      console.log(err);
    })

    storeFactory.getOrders().then(function(orders){
      $scope.orders = orders.data;
    }).catch(function(err){
      console.log(err);
    })

    storeFactory.getProducts().then(function(products){
      $scope.products = products.data
    }).catch(function(err){
      console.log(err);
    })

    $scope.addOrder = function(){
      storeFactory.addOrder({
        customer_id: $scope._customer._id,
        product_id: $scope._product._id,
        quantity: $scope.quantity
      }).then(function(order){
        var order = order.data;
        order._customer = {};
        order._customer.name = $scope._customer.name;
        order._product = {};
        order._product.name = $scope._product.name;
        $scope.orders.push(order);
      }).catch(function(err){
        $scope.notAvailable = 'Only ' +  p.quantity + ' left of ' + p.name + '.';
        console.log(err);
      })
    }

    $scope.range = function(n) {
      var arr = [];
      for (var i = 1; i <= n; i++) {
        arr.push(i);
      }
      return arr
    };
  }])
