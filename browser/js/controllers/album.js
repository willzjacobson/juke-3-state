app.controller('AlbumCtrl', function ($scope, album, PlayerFactory, AlbumFactory, $stateParams) {
	
	$scope.album = album;

	$scope.isCurrent = function (song) {
		var current = PlayerFactory.getCurrentSong();
		return current && current._id == song._id;
	};
	$scope.start = function (song) {
		PlayerFactory.start(song, $scope.album.songs);
	};

	// $scope.theId = $stateParams._id
	// AlbumFactory.fetchById($scope.theId)
	// .then(function(album){
	// 	$scope.album = album;
	// })

});

app.config(function($stateProvider){
	$stateProvider.state('singleAlbum', {
		url: '/albums/:_id',
		templateUrl: '/templates/album.html',
		controller: 'AlbumCtrl',
		resolve: {
			album: function(AlbumFactory, $stateParams){
				return AlbumFactory.fetchById($stateParams._id)
			}
		}
	});
});