app.controller("contactUsController",function($scope,userService){
    $scope.firstName=userService.firstName;
    $scope.fullName=userService.fullName();

    $scope.language={
        telugu:"telugu1",
        english:"english1"
    };
    $scope.submitUser=function(){
        alert($scope.language);
        console.log($scope.language);
        console.log($scope.gender);
    }
});