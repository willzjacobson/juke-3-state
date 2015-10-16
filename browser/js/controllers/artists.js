app.controller('ArtistsCtrl', function ($scope, ArtistFactory) {
	ArtistFactory.fetchAll()
	.then(function (artists) {
		$scope.artists = artists;
	});
	// $rootScope.$on('changeView', function (evt, data) {
	// 	$scope.showMe = (data.name == 'allArtists');
	// });
	$scope.viewArtist = function (artistId) {
		// $rootScope.$broadcast('changeView', {
		// 	name: 'oneArtist',
		// 	id: artistId
		// });
	};
});


app.config(function ($stateProvider){
	$stateProvider.state('artistsList', {
		url: '/artists',
		templateUrl: '../../templates/artists.html',
		controller: 'ArtistsCtrl'
	});
});