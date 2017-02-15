var app = angular.module("myApp",["ngRoute"]);

app.controller("mainController",function($scope){
    $scope.name=", welcome to Angular";


    $scope.add=function(){
        $scope.txtResult=parseInt($scope.txtAddFirst)+parseInt($scope.txtAddSecond);
        $scope.hideInput=true;
    }
});

app.controller("userController",function($scope){
    $scope.users=[{
        firstName:"venakat",
        lastName:"Sandeep"
    },{
        firstName:"a",
        lastName:"Sandeep"
    },{
        firstName:"b",
        lastName:"Sandeep"
    },{
        firstName:"c",
        lastName:"Sandeep"
    }];

    $scope.redText="redText";
    $scope.redBorder="redBorder";
    $scope.heading=false;
    $scope.gender="male";
});

app.config(function($routeProvider){
    $routeProvider
        .when('/about',{
            templateUrl:"views/about.html"
        })
        .when('/contactUs',{
            templateUrl:"views/contactUs.html",
            controller:'userController'
        })
        .otherwise({
            rediretTo:"/about"
        })
});