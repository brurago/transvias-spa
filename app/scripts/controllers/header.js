'use strict';

var app = angular.module('transviasApp');

app.controller('SearchCtrl',function($scope){
	$scope.searchwidth = 'header-search-sm';

	$scope.searchClassIn = function(){
		$scope.searchwidth = 'header-search-lg';
	};

	$scope.searchClassOut = function(){
		$scope.searchwidth = 'header-search-sm';
	};

	// $scope.changeSearchClass = function(){
	// 	if ($scope.searchwidth === 'header-search-sm')
	// 		{$scope.searchwidth = 'header-search-lg';}
	// 	else
	// 		{$scope.searchwidth = 'header-search-sm';}
	// };
});
