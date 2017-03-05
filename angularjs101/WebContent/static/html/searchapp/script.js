var app = angular.module('searchApp',[]);

app.service('searchService',function($http){
	this.getPersons = function(){
		return $http.get('http://localhost:8080/angularjs101/static/html/searchapp/database.json');
	}
});


app.controller('searchCtrl',function($scope, $http, searchService){
	//approach1
    /*$http.get('http://localhost:8080/angularjs101/static/data/searchapp/database.json')
    .success(function(response){
        $scope.persons = response.records;
    });*/
	
	//approach2
	/*getPersons();
    function getPersons(){
    	
    	searchService.getPersons().success(function(data){
    		console.log("data for mservice:"+data);
    		$scope.persons = data.records;
    	});
    };*/ 
	
	searchService.getPersons().success(function(data){
		console.log("data for mservice:");
		console.log(data);
		$scope.persons = data.records;
	});
    
});