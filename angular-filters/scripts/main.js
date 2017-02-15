var app = angular.module("myApp",["ngRoute"]);


app.controller("userController",function($scope, $filter){
    $scope.users=[{
        firstName:"venakat",
        lastName:"Sandeep",
        age:12
    },{
        firstName:"a",
        lastName:"aandeep",
        age:3
    },{
        firstName:"b",
        lastName:"bandeep",
        age:81
    },{
        firstName:"c",
        lastName:"candeep",
        age:2
    }];
    $scope.amount="100.12345678";
    $scope.today= new Date();
    $scope.name="SandepAsdasadsaAAADD";
    $scope.names=["sandeep","pavan","alok"];
    $scope.ages=[1,22343,3,4234,5,6,565,653,341,3432];
});

app.filter("replace",function(){
   return function(stringInput){
        var replacedString;
       if(stringInput=="US"){
           replacedString="united states";
       }
       else{
           replacedString=stringInput;
       }

        return replacedString;
   }
});

app.filter("agefilter",function(){
    return function(ageInput){
        var ageOutpt;
        if(ageInput>=18){
            ageOutpt="adult";
        }
        else if(ageInput<18){
            ageOutpt="child";
        }
        else{
            ageOutpt=ageInput;
        }
        return ageOutpt;
    }
})

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