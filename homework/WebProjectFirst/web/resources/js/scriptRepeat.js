
var employees = [
                 {firstName : "Ankit", lastName : "Singh", age : "23"},
                 {firstName : "Ramesh", lastName : "Singh", age : "45"},
                 {firstName : "APJ", lastName : "Kalam", age : "75"}
                 ];

var countries = [{	
	country : "US",
	cities : [
	          {name : "Washington"},
	          {name : "LA"},
	          {name : "NY"}
	          ]
},{
	country : "UK",
	cities : [
	          {name : "London"},
	          {name : "NewCastle"},
	          {name : "Chelsea"}
	          ]}
,{
	country : "India",
	cities : [
	          {name : "Mumbai"},
	          {name : "Delhi"},
	          {name : "Kanpur"}
	          ]
}];

var myApp = angular.module("myModule", []).controller("myController", function($scope){

	$scope.employees = employees;
	$scope.countries = countries;
});