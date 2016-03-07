(function(){
	'use strict';
	
	var musicPlayer = angular.module('musicPlayer',['ui.bootstrap','ui.router','firebase']);
	
	musicPlayer.config(function ($stateProvider, $urlRouterProvider) {
		
		$stateProvider
			
			.state('tracks',{
				url:'/tracks',
				templateUrl:'components/tracks/tracksView.html',
				controller:'TracksController as tracks'
			})
			
			.state('genres',{
				url:'/genres',
				templateUrl:'components/genres/genresView.html',
				controller:'GenresController as genres'
			})

			
			.state('tracks.newTrack',{
				url:'/newTrack',
				templateUrl:'components/tracks/newTrackView.html',
				controller:'NewTrackController as newTrack'
			})
			
			.state('tracks.updateTrack',{
				url:'/updateTrack/:trackTitle',
				templateUrl:'components/tracks/updateTrackView.html',
				controller:'UpdateTrackController as updateTrack'
			});
		
	});
	

})();