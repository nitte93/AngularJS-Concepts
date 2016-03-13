// Code goes here

var myApp = angular.module("myApp", []);
//Notice that the rootScope's variable is set when the module initializes, 
//and then each of the 
//inherited scope's get their own copy which can be set independently

myApp.run(function($rootScope) {
    $rootScope.test = "I'm defined in $rootScope, I'm accessible everywhere";
})

myApp.controller("myCtrl1", function($scope, $rootScope){
//$rootScope.test  = "I'm defined in $rootScope, I'm accessible everywhere";
  $scope.test = "I'm defined in the scope of myCtrl1";
  this.test1 = "I'was set with 'this' inside ctrl1";
})

myApp.controller("myCtrl2", function($scope, $rootScope){
  //$scope.test = "I'm defined in the scope of myCtrl2";
  this.test1 = "I was set using 'this' inside ctrl2 ";
})