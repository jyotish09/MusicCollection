(function(){
	'use strict';
	
	angular.module('musicPlayer').controller('UpdateTrackController',UpdateTrackController);
	
	function UpdateTrackController($scope, $stateParams,$firebaseArray,searchTracks,$state){
		var vm = this;
		vm.trackTitle = $stateParams.trackTitle;
		vm.trackDetail ;
		console.log("Getting Details :"+ vm.trackTitle);
		vm.trackDetail = $firebaseArray(searchTracks.orderByChild("title").equalTo(vm.trackTitle));
		
		$scope.updateTrackDetsils = function(id){
			console.log("Updating for :"+id);
			var refTrack = new Firebase("https://musicrack.firebaseio.com/tracks/"+id);
			
			try{
				var newGenres = vm.genresNew.split(",");
				refTrack.update({artist: vm.artistNew,genres: newGenres,rating: vm.ratingNew,title: vm.titleNew});
				$state.go('tracks');$state.go('tracks');
				console.info("Track "+vm.titleNew+" Updated");
			}
			catch(e){
				console.warn(e);
			}
		}; 
		
	}
	
})();