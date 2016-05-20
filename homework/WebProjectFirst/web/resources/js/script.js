var employee = {
	firstName : "Ankit",
	lastName : "Singh",
	age : "23"
};

var user = {
		name : "Ankit",
		country : "New Zealand",
		work : "Enterpreuner",
		image : "resources/images/16032010242.jpg"
}

var myApp = angular.module("myModule", []).controller("myController",
		function($scope) {
			$scope.message = "Angular JS Tutorial";
			$scope.employee = employee;
			$scope.user = user;
		});

//Simpler way of creating a module and attaching a controller
//var myApp = angular.module("myModule", []);


/*myApp.controller("myController", function($scope) {

	$scope.message = "Angular JS Tutorial";
	$scope.employee = employee;

});*/