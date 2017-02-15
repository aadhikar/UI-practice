(function(){
'use strict';

var ngRoutingApp = angular.module('ngRoutingApp', ['ngRoute']);

    // configure our routes
    ngRoutingApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/home', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            })
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            });
    });

    // create the controller and inject Angular's $scope
    ngRoutingApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    ngRoutingApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    ngRoutingApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });


})();