angular

.module('BlueCrossApp.controllers')

.controller('loginController', loginController);

loginController.$inject = ['$rootScope', '$scope', '$state', 'AuthService', 'DataService'];

function loginController ($rootScope, $scope, $state, AuthService, DataService) {
	$rootScope.isLoggedIn = false;
	$scope.email = "";
	$scope.password = "";
	$scope.error = "";

	function successHandler(d){
		console.log(d.data.token);
		AuthService.setToken(d.data.token);
		$state.go('dashboard');
	}

	function errorHandler() {
		$scope.error = "Invalid Email / password"
		$scope.password = "";
		sweetAlert("Error", $scope.error, "error");
	}
		
	$scope.login = function() {

		if( $scope.email && $scope.password ) {
			DataService.login( $scope.email, $scope.password )
			.then(successHandler, errorHandler);
		}

	}

}