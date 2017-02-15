app.controller("aboutUsController",function($scope,userFactory,mathService){
    $scope.lblFirstName=userFactory.firstName;
    $scope.lblFullName=userFactory.fullName();

    $scope.print=function(){
        //userFactory.firstName="sandeep";
        $scope.multiplyOutput=mathService.multiply($scope.txtFirstValue,$scope.txtSecondValue);
    };

    $scope.mathServiceName=mathService.firstName;
    $scope.mathServiceMethod=mathService.fullName();
});