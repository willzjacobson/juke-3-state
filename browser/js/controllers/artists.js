app.controller('ArtistsCtrl', function ($scope, artists) {

	$scope.artists = artists;

});


app.config(function ($stateProvider){
	$stateProvider.state('artistsList', {
		url: '/artists',
		templateUrl: '/templates/artists.html',
		controller: 'ArtistsCtrl', 
		resolve: {
			artists: function(ArtistFactory) {
				return ArtistFactory.fetchAll();
			}
		}
	});
});