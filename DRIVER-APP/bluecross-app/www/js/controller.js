/* global angular, document, window */
'use strict';

var URL = "http://localhost:3000";

var DRIVER_REG_NO = "565a9b8019693e834cbb8710";

angular.module('bluecross.controllers', ['ngCordova.plugins.localStorage'])

.controller('utils', function($scope, $location, $ionicHistory){

	$scope.go = function ( path ) {
	  if( path == 'back') {
	  	$ionicHistory.goBack();
	  }
	  else {
	  	$location.path( path );
	  }
	};

	
})

.controller('homeController', function($scope, $state, $ionicPopup, $http, $cordovaLocalStorage) {
	
	$scope.isRideAssigned = false;

	$scope.URL = URL;

	$scope.ambulanceData = {};

	$scope.destinationAddress = "";

	function loadMaps() {

		var myCenter=new google.maps.LatLng($scope.ambulanceData.assignedToOrdinate.lat, $scope.ambulanceData.assignedToOrdinate.lon);
		function initialize()
		{	
			console.log(myCenter)
			var mapProp = {
			  center:myCenter,
			  zoom:13,
			  mapTypeId:google.maps.MapTypeId.ROADMAP
			};

			var map = new google.maps.Map(document.getElementById("googleMaps"),mapProp);

			var marker = new google.maps.Marker({
			  position:myCenter
			});

			marker.setMap(map);

			var infowindow = new google.maps.InfoWindow({
			  content: $scope.destinationAddress
			});

			infowindow.open(map,marker);

		}

		setTimeout(function () {
			initialize();
		},2000)


	}

	function loadAddress () {
		console.log("LOADING ADDRESS")
		$http({
			method: 'GET',
			url: "http://maps.googleapis.com/maps/api/geocode/json?latlng="+$scope.ambulanceData.assignedToOrdinate.lat+","+$scope.ambulanceData.assignedToOrdinate.lon+"&sensor=true"
		})
		.then(function(res) {
			$scope.destinationAddress = res.data.results[0].formatted_address;
		})
	}

	function getAmbulanceInfo() {

		if(! $scope.isRideAssigned) {

			$http({
	            method: 'GET',
	            url: URL + '/ambulance/getAmbulance',
	            params: {
	            	_id: DRIVER_REG_NO
	            }
	        })
	        .then(function(res){
	           	$scope.ambulanceData = res.data;
	           	if( $scope.ambulanceData.assignedTo ) {
	           		console.log("RETRIEVING ADDRESS")
	           		$scope.destinationAddress = "RETRIEVING ADDRESS..";
	           		$scope.isRideAssigned = true;
	           		loadMaps();
	           		loadAddress();
	           	}
	        })

		}

		
	}


	setInterval(getAmbulanceInfo,1000);

})