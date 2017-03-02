var app = angular.module('secondApp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'home.html'
    })
    .when('/helloUser',{
        templateUrl: 'helloUser.html'
    })
    .otherwise({
        redirectTo:'/'
    });
});