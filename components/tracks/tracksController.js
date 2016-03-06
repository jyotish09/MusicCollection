(function(){
	
	'use strict';
	
	angular.module('musicPlayer').controller('TracksController',TracksController);
		
	function TracksController(trackService,searchTracks,$scope,$firebaseArray){
		
		console.log("TracksController");
		var vm = this;
		
		vm.tracks = trackService;
		console.log(trackService);
		vm.allTracks = true;	
		vm.searchTracksBoolean = false;
		vm.searchTracksResult = [];
		vm.currentPage = 1;
		$scope.trackCheck = function(){
			
			console.log("Searching for "+vm.searchTitle);
			vm.allTracks = false;
			vm.searchTracksBoolean = true;
			
			try{
				//console.log(searchTracks.orderByChild("title").equalTo(vm.searchTitle));
				vm.searchTracksResult = $firebaseArray(searchTracks.orderByChild("title").equalTo(vm.searchTitle));
				console.log(vm.searchTracksResult);
				
			}catch(e){
				console.warn("Error : "+e);
			}
			
		};
		
		
		$scope.rating = function(rate){
			var r=[];
			
			for(var i=0;i<rate;i++){
				r.push(i);
			}
			
			return r;
		}; 
	}
	
	
})();