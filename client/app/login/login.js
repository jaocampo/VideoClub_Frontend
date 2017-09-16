'use strict';
angular.module('startUpApp')
.config(function($stateProvider){
	$stateProvider
	.state('login',{
		url:'/login',
		template: '<login></login>'
	});
});