(function(){
	
	'use strict';
	
	angular.module('musicPlayer').controller('TracksController',TracksController);
		
	function TracksController(trackService,$scope){
		
		console.log("TracksController");
		var vm = this;
		vm.tracks = trackService;
		
/* 		$scope.hello = function (){
			console.log("WTF?!?!");
		}; */
		
		$scope.trackCheck = function(){
			
		};
	}
	
	
})();