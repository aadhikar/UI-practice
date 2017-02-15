var app = angular.module("myApp",["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
        .when('/about',{
            templateUrl:"views/about.html",
            controller:"aboutUsController"
        })
        .when('/contactUs',{
            templateUrl:"views/contactUs.html",
            controller:'contactUsController'
        })
        .otherwise({
            redirectTo:"/about"
        })
});