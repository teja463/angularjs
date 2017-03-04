var app = angular.module('firstApp',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        template: 'Welcome to home page'
    })
    .when('/anotherPage',{
        template: 'Welcome to another page'
    })
    .otherwise({
        redirectTo: '/'
    });
});