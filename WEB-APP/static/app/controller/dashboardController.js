angular

.module('BlueCrossApp.controllers')

.controller('dashboardController', dashController);

dashController.$inject = ['$rootScope', '$scope', '$state', 'AuthService', 'DataService'];

function dashController ($rootScope, $scope, $state, AuthService, DataService) {
	
	if(!AuthService.isAuthenticated()) {
		$state.go('login');
	}

	$rootScope.isLoggedIn = true;

}
