
var technologies = [
                 {name : "JAVA", likes : 0, dislikes : 0},
                 {name : "Servlet", likes : 0, dislikes : 0},
                 {name : "JSP", likes : 0, dislikes : 0},
                 {name : "AngularJs", likes : 0, dislikes : 0}
                 ];

var myApp = angular.module("myModule", []).controller("myController", function($scope){
	$scope.technologies = technologies;
	
	$scope.incrLikes = function(technology){
		technology.likes++;
	};
	
	$scope.incrDislikes = function(technology){
		technology.dislikes++;
	};
});