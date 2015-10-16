app.controller('AlbumsCtrl', function ($scope, albums) {

	$scope.albums = albums;

});


app.config(function($stateProvider) {
	$stateProvider.state('albumList', {
		url: '/albums',
		templateUrl: '/templates/albums.html',
		controller : "AlbumsCtrl", 
		resolve: {
			albums: function(AlbumFactory) {
				return AlbumFactory.fetchAll();
			}
		}
	});
});