angular.module('store')
  .controller('productController', ['$scope', 'storeFactory', 'Upload', function($scope, storeFactory, Upload){
    storeFactory.getProducts().then(function(products){
      $scope.products = products.data
    })

    $scope.addProduct = function(){
      storeFactory.addProduct({
        name: $scope.name,
        description: $scope.description,
        quantity: $scope.quantity,
        image: $scope.file
      }).then(function(product){
        $scope.products.push(product.data);
        //$scope.upload($scope.image);
      }).catch(function(err){
        console.log(err);
      })
    }
  }])
