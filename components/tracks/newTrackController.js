(function(){
	
	'use strict';
	
	angular.module('musicPlayer').controller('NewTrackController',NewTrackController);
	
	
	function NewTrackController(newTrackService,$scope,$state){	
		
		var vm = this;
		console.log("NewTrackController");
		vm.tracks = newTrackService;
		
		$scope.addTrack = function(){

				if(!vm.genres || !vm.title || !vm.rating || !vm.artist)
				{
					console.warn("Data Glitch, Refill and Try Again");
					$state.go('tracks');
					return;
				}
				
			try{
				var genres = vm.genres.split(",");
			}
			catch(e){
				console.warn("Data Glitch, Refill and Try Again");
				alert("Data Glitch, Refill and Try Again");
				$state.go('tracks');
				return;
			}
			
			console.info("It Worked! , Well Partially :/ ");
			console.log("Newly Added Song Title : "+vm.title);
			console.log("Newly Added Song Rating : "+vm.rating);
			console.log("Newly Added Song Artist : "+vm.artist);

			
			console.log("Genres ["+genres.length+"] : "+genres);
			
			 
			vm.tracks.$add({
				date: Firebase.ServerValue.TIMESTAMP,
                title: vm.title,
                rating: vm.rating,
				genres: genres,
				artist: vm.artist
			});
			
			$state.go('tracks');
			
		};
	}
	
})();