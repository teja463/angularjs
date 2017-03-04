var app = angular.module('loginApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "login.html"
        })
        .when('/dashboard', {
            resolve: {
                "check": function ($location, $rootScope) {
                    if (!$rootScope.isLoggedIn) {
                        $location.path('/');
                    }
                }
            },
            templateUrl: "dashboard.html"
        })
        .when('/error', {
            templateUrl: 'error.html'
        })
        .otherwise({
            redirectTo: '/'
        })
});

app.controller('loginCtrl', function ($scope, $location, $rootScope) {
    $scope.submit = function () {

        if ($scope.username == "admin" && $scope.password == "admin") {
            $rootScope.isLoggedIn = true
            $location.path("/dashboard");
        } else {
            $location.path("/error");
        }
    }
});