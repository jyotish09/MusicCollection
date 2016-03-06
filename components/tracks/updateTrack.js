(function(){
	'use strict';
	
	angular.module('musicPlayer').controller('UpdateTrackController',UpdateTrackController);
	
	function UpdateTrackController($scope, $stateParams,$firebaseArray,searchTracks){
		var vm = this;
		vm.trackTitle = $stateParams.trackTitle;
		vm.trackDetail = [];
		console.log("Getting Details :"+ vm.trackTitle);
		
		vm.trackDetail = $firebaseArray(searchTracks.orderByChild("title").equalTo(vm.trackTitle));
		//vm.currentGenres = vm.trackDetail.genres.join(",");
		var temp = vm.trackDetail;
		console.log(temp);
	
		
	}
	
})();