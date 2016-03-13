var app = angular.module('myApp', []);

app.factory("userData", function(){
    var userList = {};
    
    userList.userInfo = [
      {name: "Nitest", lastName: "Tiwari"},
      {name: "Joydeep", lastName: "Banik"},
      {name: "Anand", lastName: "Mishra"},
    ];
    
    userList.addNewValue = function(obj){
      var temp = {};
      temp.name = obj.newName;
      temp.lastName = obj.newLastname; 
      this.userInfo.push(temp);
    }
    return userList;
    
});

app.controller('MainCtrl', ["$scope", "userData", function($scope, userData) {
  //$scope.name = 'World';
    this.name = "MainCtrl"
  
}]);

app.controller('myCtrl1', ["$scope", "userData", function($scope, userData) {
  //$scope.name = 'World';
    this.name = "Ctrl1"
    this.userInfo = userData.userInfo;  
    this.addValue = function(){
      userData.addNewValue(this);
    }
}]);

app.controller('myCtrl2', ["$scope", "userData", function($scope, userData) {
  //$scope.name = 'World';
    this.name = "Ctrl2"
    this.userInfo = userData.userInfo;  
}]);
