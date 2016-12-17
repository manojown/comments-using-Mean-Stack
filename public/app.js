// i use rootscope  instead of set cookies or session to remeber user for app  each mode or each module
var app = angular.module("myApp", ['ui.router']); 

app.controller("myCtrl", function($scope,$http,$rootScope) {
  // subscribe at starting when user click on subscribe and validate that fied  if null

    $scope.subsribe = function(user){
    
      $scope.user1 = user
      console.log($scope.mycomment);
      $scope.mycomment = null;

      // validation for subscribe field
      if(!user){
            alert("enter user name than submit") ;
      }else{

            // call user controller by login to show all comments 
            $http.post("/login",{user:$scope.user1}).then(function(data)
            {
            
            $rootScope.message = data.data.message; // for first time create account
            $rootScope.verify = data.data.comments; //all details  of comments
            $rootScope.logeduser =  data.data.user //current loged in user
           
          });

      }
    }

    //for  comment when user want to comment than click  on comment 
     $scope.comment = function(loguser,com){
     
      $scope.loguser = loguser;
       $scope.com = com;
       //console.log(mycomment);
         $scope.mycomment = null;
      //validate comment field if it is null than give alert and not than go furthure
       if(! $scope.com){

                  alert("first comment than submit") ;
       }else{

        
                $http.post("/insert",{user:$scope.loguser,comment:  $scope.com}).then(function(data)
                {
                  
                 

                      $scope.subsribe(loguser);
                       
                 
                  
              });
          }
    } 

    //for upvote task
     $scope.upvotectrl = function(cid){
     
      $scope.cid = cid;
      
      $http.post("/upvote",{cid:$scope.cid,user:  $rootScope.logeduser,flag:0}).then(function(data)
      {
        
        

            $scope.subsribe( $rootScope.logeduser); //to relode page after click on upvote
       
        
    });

    }
    //for downvote task
    $scope.downvotectrl = function(cid){
     
      $scope.cid = cid;
       
      $http.post("/downvote",{cid:$scope.cid,user:  $rootScope.logeduser,flag:1}).then(function(data)
      {
        
        

            $scope.subsribe( $rootScope.logeduser); //to relode page after click on downvote
       
        
    });

    }
});
// state file to manage state of url
app.config(function($stateProvider, $urlRouterProvider)
{

   

    $stateProvider
    
       
        .state('home', {
          url: '/home',
 
          templateUrl: 'views/home.html',
          controller: 'myCtrl'
        })
});