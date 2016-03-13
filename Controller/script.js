// Code goes here

var myApp = angular.module("myApp", []);


myApp.controller("myCtrl1", ["$scope", function($scope){
      this.controllerName = "Ctrl1";
      this.changeMyName = function(value){
        console.log(this);
       this.controllerName = value;
      }
}]);

myApp.controller("myCtrl2", ["$scope", function($scope){
  this.controllerName = "ctrl2";
  this.changeMyName = function(value){
    console.log(this);
    this.controllerName = value;
  }
}]);