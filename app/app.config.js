(function(){
	'use strict';

	angular
		.module('app')
		.config(config);

	config.$inject = ['$urlRouterProvider','$stateProvider','$locationProvider'];

	function config($urlRouterProvider,$stateProvider,$locationProvider){
		/*$routeProvider
			.when('/',{
				templateUrl:'app/home/home.html',
				controller:'HomeCtrl',
				controllerAs:'homeVm'
			})
			.otherwise({redirectTo:'/'});*/

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
			//.state('otherwise',{url:'/otherwise'});

		
	}
})();