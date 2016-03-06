(function(){
	'use strict';
	
	angular.module('musicPlayer').factory('trackService', function($firebaseArray){
        var ref = new Firebase("https://musicrack.firebaseio.com/tracks");
        return $firebaseArray(ref);
    });
	
	angular.module('musicPlayer').factory('searchTracks',function(){
        var refTracks = new Firebase("https://musicrack.firebaseio.com/tracks");
        return refTracks;
    });
				

})();