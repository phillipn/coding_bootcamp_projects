angular.module('store')
  .factory('storeFactory', ['$http', function($http){
    return {
      getSomeProducts: function(){
        return $http.get('api/someproducts')
      },
      getRecentOrders: function(){
        return $http.get('api/recentorders')
      },
      getNewCustomers: function(){
        return $http.get('api/newcustomers')
      },
      getCustomers: function(){
        return $http.get('api/customers')
      },
      addCustomer: function(object){
        return $http.post('api/customers', object)
      },
      deleteCustomer: function(customer_id){
        return $http.delete('api/customers/' + customer_id)
      },
      getOrders: function(){
        return $http.get('api/orders')
      },
      getProducts: function(){
        return $http.get('api/products')
      },
      addProduct: function(product){
        return $http({
          method: 'POST',
          url: 'api/products',
          data: product
        })
      },
      addOrder: function(object){
        return $http.post('api/orders', object)
      }
    }
  }])
