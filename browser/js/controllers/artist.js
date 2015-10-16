app.controller('ArtistCtrl', function ($scope, artist, PlayerFactory) {

	$scope.artist = artist;

	$scope.isCurrent = function (song) {
		var current = PlayerFactory.getCurrentSong();
		return current && current._id == song._id;
	};
	$scope.start = function (song) {
		PlayerFactory.start(song, $scope.artist.songs);
	};

});


app.config(function($stateProvider){
	$stateProvider.state('singleArtist', {
		url: '/artist/:_id',
		templateUrl: '/templates/artist.html',
		controller: 'ArtistCtrl',
		resolve: {
			artist: function(ArtistFactory, $stateParams){
				return ArtistFactory.fetchById($stateParams._id);
			}
		}
	})
	.state('singleArtist.showArtistAlbums', {
		url: '/somethingstupid',
		templateUrl: 'templates/showArtistAlbums.html',
	})
	.state('singleArtist.showArtistSongs', {
		url: '/somethingfunny',
		templateUrl: 'templates/showArtistSongs.html'
	})
});