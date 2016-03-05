(function(){
	'use strict';
	
	angular.module('musicPlayer').factory('newTrackService', function($firebaseArray){
        var ref = new Firebase("https://musicrack.firebaseio.com/tracks");
        return $firebaseArray(ref);
    });
				

})();