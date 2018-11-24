(function(){
	"use strict";
	var app = angular.module("newsApp")
	.controller("newsCtrl", function(newsService){

		var _self = this;
		
		_self.loading = true;

		newsService.getAll().then(function(response){
			_self.loading = false;
			if(response.status === 200){
				_self.news = response.data.articles;
			} else {
				alert("Hubo un error.");
			}
		})
	});
}());