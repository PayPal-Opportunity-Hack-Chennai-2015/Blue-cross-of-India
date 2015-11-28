'use strict';

/**
 * @ngdoc function
 * @name BlueCross.service:DataService
 * @description
 * # DataService
 * Service for HTTP of the app
 */

angular

.module('BlueCrossApp.services')

.factory('DataService', dataService);

dataService.$inject = ['$http','$window'];

function dataService($http, $window){

	var URI = "http://localhost:3000";

	var data = {
		login : login
	};

	return data;


	function login(email, password) {

		return $http({
                    method: 'POST',
                    data: { email: email, password: password },
                    url: URI + '/user/login',
                })
	}

				
}