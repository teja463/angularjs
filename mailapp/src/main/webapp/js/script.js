var app = angular.module('mailApp',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'inbox.html'
	})
	.when('/drafts',{
		templateUrl:'drafts.html'
	})
	.when('/compose',{
		templateUrl: 'compose.html'
	})
	.otherwise({
		redirectTo: '/'
	});
	
});

app.controller('mailCtrl',function($scope, $location){
  $scope.title = 'Enter your title here';
  $scope.mails = [];
  
  $scope.inboxTemplate = 'inbox.html';

  $scope.compose = function(){
    $scope.composeTemplate = 'compose.html';
    $scope.inboxTemplate = '';
  };

  $scope.sendMail = function(from, to,cc,subject,message,status){
      $scope.mail = {from:from, to:to, cc:cc, subject:subject, message:message, status:status};
      $scope.mails.push($scope.mail);
      $location.path('/');
  };

});