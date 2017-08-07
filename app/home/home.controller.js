(function(){
	'use strict';

	angular
		.module('app')
		.controller('HomeCtrl',HomeController);


	function HomeController(){
		var homeVm = this;
		homeVm.displayTitle = displayTitle;
		
		///////
		
		var counter = 1;
		function displayTitle(){
			if(counter === 1){
				homeVm.title = "I been pushed";
				counter++;
			}else if(counter === 2){
				homeVm.title += " I been pushed once more";
				counter++;
			}else{
				homeVm.title += " and again!";
			}
	
		}
	}

})();