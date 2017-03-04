var app = angular.module('searchApp',[]);

app.controller('searchCtrl',function($scope, $http){
    $http.get('http://localhost:8080/angularjs101/static/data/searchapp/database.json')
    .success(function(response){
        $scope.persons = response.records;
    });
});