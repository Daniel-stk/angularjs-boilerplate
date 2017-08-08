(function(){
	'use strict';

	angular
		.module('app')
		.config(config);

	/*@ngInject*/
	function config($urlRouterProvider,$stateProvider,$locationProvider){
	    $locationProvider.html5Mode({
	     	enabled:false,
	     	requireBase: false
	    });

    	$locationProvider.hashPrefix('!');
        
        $urlRouterProvider.otherwise('home');	

    	$stateProvider
			.state('home',{
				url:'/home',
				templateUrl:'app/home/home.html',
				controller:'HomeCtrl',
				controllerAs:'homeVm'
		});
	}
})();