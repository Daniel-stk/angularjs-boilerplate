/*jslint node: true */
/*global angular, describe, it, jasmine, expect, beforeEach */
"use strict";

describe("Home controller",function(){
	var homeCtrl;
	beforeEach(function(){
		angular.mock.module("app");

		angular.mock.inject(function($controller){
			homeCtrl = $controller("HomeCtrl");
		});
	});

	it("displays title",function(){
		homeCtrl.displayTitle();
	})
});