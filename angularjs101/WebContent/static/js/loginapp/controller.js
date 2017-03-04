var app = angular.module('loginApp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: "login.html"
    })
    .when('/dashboard',{
        templateUrl: "dashboard.html"
    })
    .when('/error',{
        templateUrl: 'error.html'
    })
    .otherwise({
        redirectTo: '/'
    })
});

app.controller('loginCtrl',function($scope,$location){
    $scope.submit = function(){
        if($scope.username == "admin" && $scope.password == "admin"){
            $location.path("/dashboard");
        }else{
             $location.path("/error");
        }
    }
});