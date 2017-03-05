var app = angular.module('todoApp',[]);

app.controller('todoCtrl',function($scope){
	$scope.tasks = [];
	var tasksData = localStorage['tasksList'];
	if(tasksData !== undefined){
		$scope.tasks = JSON.parse(tasksData);
	}
	
	$scope.searchEnter =  function(){
		if(event.keyCode == 13 && $scope.task != ""){
			$scope.addTask();
		}
	};
	$scope.addTask = function(){
		$scope.tasks.push({"msg":$scope.task,"status":false});
		console.log($scope.tasks);
		localStorage['tasksList'] = JSON.stringify($scope.tasks);
		$scope.task="";
	}
});