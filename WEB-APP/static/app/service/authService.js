'use strict';

/**
 * @ngdoc function
 * @name BlueCross.service:AuthService
 * @description
 * # AuthService
 * Service for authentication of the app
 */

angular

.module('BlueCrossApp.services')

.factory('AuthService', authService);

authService.$inject = ['$http','$window'];

function authService($http, $window){

	var $storage = $window.localStorage;

	var auth = {
		init 			: init,
		isAuthenticated : isAuthenticated,
		getToken 		: getToken,
		setToken		: setToken,
		removeToken		: removeToken
	};

	return auth;

	var sessionToken = '';

	function init() {
		// Get the session token from storage if available
		this.sessionToken = this.getToken();
	}

	function isAuthenticated() {
		return !! this.getToken();
	}

	function getToken() {
		var data    = $storage.getItem('token');
		var expires = $storage.getItem('token-expires');
		// Check if the cache is expired 
		if(data && ( expires > Date.now() )){
			return data;
		}
		else {
			return null;
		}
	}

	function setToken(token) {
		var expires = Date.now() + 86400000;
		$storage.setItem('token', token);
		$storage.setItem('token-expires', expires);
	}

	function removeToken() {
		$storage.removeItem('token');
	}	

}
