var app = angular.module('timeApp')

app.directive('favNum', function(){
	return {
		restrict: 'E',
		templateUrl: 'test.html'
		}
});