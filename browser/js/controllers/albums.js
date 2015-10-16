app.controller('AlbumsCtrl', function ($scope, AlbumFactory) {
	AlbumFactory.fetchAll()
	.then(function (albums) {
		$scope.albums = albums;
	});
	// $rootScope.$on('changeView', function (evt, data) {
	// 	$scope.showMe = (data.name == 'allAlbums');
	// });

});


app.config(function($stateProvider) {
	$stateProvider.state('albumList', {
		url: '/albums',
		templateUrl: '/templates/albums.html',
		controller : "AlbumsCtrl"
	});
});