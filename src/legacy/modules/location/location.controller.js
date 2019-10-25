import angular from 'angular';

export default angular
	.module('EnboarderApp.controllers', [])
	.controller('locationController', [
		'$scope',
		function($scope) {
			console.log($scope, 'locationController...');
		}
	]).name;
