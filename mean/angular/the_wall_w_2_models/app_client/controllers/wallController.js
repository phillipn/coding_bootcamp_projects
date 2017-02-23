angular.module('wall')
  .controller('wallController',['$scope', 'authFactory', 'wallFactory', function($scope, authFactory, wallFactory){
    wallFactory.getPosts().then(function(posts){
      $scope.posts = posts.data;
    })

    $scope.addPost = function(){
      wallFactory.addPost({
        post: $scope.postContent
      }).then(function(post){
        $scope.posts.push(post.data);
        $scope.postContent = '';
      }).catch(function(err){
        console.log(err);
      })
    }

    $scope.addComment = function(comment, post){
      wallFactory.addComment(comment, post._id).then(function(updatedPost){
        console.log(updatedPost);
        var index  = $scope.posts.indexOf(post);
        $scope.posts[index] = updatedPost.data;
      }).catch(function(err){
        console.log(err);
      })
    }
  }])
