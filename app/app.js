(function(){
	"use strict";
	var app = angular.module("newsApp", ["ui.router"]);

	app.config(function($stateProvider){
		$stateProvider
		      .state(
				  "home",
				  {
					 url: "/",
					 templateUrl: "app/Views/news/index.html",
					 controller:"newsCtrl as vm"
				  }
			  )
	});
}());