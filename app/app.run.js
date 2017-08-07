(function(){
	'use strict';

	angular
		.module('app')
		.run(run);

	function run(){
		//FastClick.attach(document.body);
		//$transitions.onStart({ }, function(trans) {
    	//	var SpinnerService = trans.injector().get('SpinnerService');
    	//	SpinnerService.transitionStart();
    	//	trans.promise.finally(SpinnerService.transitionEnd);
  		//});
	}
})();