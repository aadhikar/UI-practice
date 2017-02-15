var app = angular.module("myApp",["ngRoute"]);


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

    $scope.heading="HI, welcome to angular";
    $scope.userAge=10;
    $scope.print=function(){
        $scope.txtName="sand";
        $scope.textAreaValue="sandkjkasdhk kas dak";

        $scope.disableText=true;
        $scope.hideText=true;
        $scope.colorRed=true;
        $scope.makeIfTrue=true;
        $scope.borderRed="redBorder";
        $scope.anchorLink="http://www.google.com";
        $scope.txtSwitch="monday";
    };

    $scope.myArray=["sandeep","angualr","jqery"];
    $scope.mouseover=function(){
        $scope.userAge=$scope.userAge+1;
    }
});

app.controller("childController",function($scope){
    $scope.childHeading="this is from child controller";
    //$scope.heading="sample heading";
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