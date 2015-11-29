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

dataService.$inject = ['$http','$window', 'AuthService'];

function dataService($http, $window, AuthService){

	var URI = "http://localhost:3000";

	var data = {
		login : login,
		getRecentComplaints : getRecentComplaints
	};

	return data;


	function login(email, password) {

		return $http({
                    method: 'POST',
                    data: { email: email, password: password },
                    url: URI + '/user/login',
                })
	}

	function getRecentComplaints() {
		var d = new Date();
		var Timestamp = d.getDate() + "-" + (d.getMonth()+1) + "-" + d.getFullYear();
		return $http({
					method: 'GET',
					params: { TimeStamp: Timestamp, token: AuthService.getToken() },
					url   : URI + '/report/today'
		})
	}

				
}