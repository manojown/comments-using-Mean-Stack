
var app = angular.module("myApp", ['ui.router']);

app.controller("myCtrl", function($scope,$http,$rootScope) {
  // subscribe at starting when user click on subscribe and validate that fied  if null
    $scope.subsribe = function(user){
    
      $scope.user1 = user

      // validation for subscribe field
      if(!user){
            alert("enter user name than submit") ;
      }else{

            // call user controller by login to show all comments 
            $http.post("/login",{user:$scope.user1}).then(function(data)
            {
            
            $rootScope.message = data.data.message; // for first time create account
            $rootScope.verify = data.data.comments;
            $rootScope.logeduser =  data.data.user
           
          });

      }
    }

    //for  comment when user want to comment than click  on comment 
     $scope.comment = function(loguser,com){
     
      $scope.loguser = loguser;
       $scope.com = com;
      //validate comment field if it is null than give alert and not than go furthure
       if(! $scope.com){

                  alert("first comment than submit") ;
       }else{

        
                $http.post("/insert",{user:$scope.loguser,comment:  $scope.com}).then(function(data)
                {
                  
                  if(data='success'){

                      $scope.subsribe(loguser);
                  }
                  
              });
          }
    }
     $scope.upvotectrl = function(cid){
     
      $scope.cid = cid;
       
      $http.post("/upvote",{cid:$scope.cid,user:  $rootScope.logeduser,flag:0}).then(function(data)
      {
        
        

            $scope.subsribe( $rootScope.logeduser);
       
        
    });

    }

    $scope.downvotectrl = function(cid){
     
      $scope.cid = cid;
       
      $http.post("/downvote",{cid:$scope.cid,user:  $rootScope.logeduser,flag:1}).then(function(data)
      {
        
        

            $scope.subsribe( $rootScope.logeduser);
       
        
    });

    }
});

app.config(function($stateProvider, $urlRouterProvider)
{

   

    $stateProvider
    
        .state('login', {
          url: '/login',
     
          templateUrl: 'views/login.html',
          controller: 'myCtrl'
        }).state('home', {
          url: '/home',
 
          templateUrl: 'views/home.html',
          controller: 'myCtrl'
        })
});