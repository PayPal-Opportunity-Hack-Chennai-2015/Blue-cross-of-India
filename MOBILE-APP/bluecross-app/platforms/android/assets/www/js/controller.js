/* global angular, document, window */
'use strict';

var URL = "http://192.168.112.97:3000";

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

.controller('caseController', function($scope, $state, $http, $ionicLoading, $cordovaLocalStorage){

	$scope.formData = {};

	function readURL(input) {

	    if (input.files && input.files[0]) {
	        var reader = new FileReader();

	        reader.onload = function (e) {
	            $('#img_preview').attr('src', e.target.result);
	        }

	        reader.readAsDataURL(input.files[0]);
	    }
	}

	$("#file").change(function(){
	    readURL(this);
	});

	$scope.openDialog = function() {
		ionic.trigger('click', { target: document.getElementById('file') });
	}

	$scope.register = function() {

		$ionicLoading.show();

		var formData = new FormData();
		formData.append("register_by", $scope.formData.registerBy);
		formData.append("registerEmail", $scope.formData.registerEmail);
		formData.append("registerPhone", $scope.formData.registerPhone);
		formData.append("pic", $("#file")[0].files[0]);

		function showPosition(position){

			formData.append("animal_location", position.coords.latitude + "," + position.coords.longitude);
			$.ajax({
				url: URL + "/complaint/create",
				data: formData,
				cache: false,
			    contentType: false,
			    processData: false,
			    type: 'POST',
			    success: function(res){
			    	$cordovaLocalStorage.setItem('ambulance',JSON.stringify(res));
			    	$state.go("ambulance_assigned");
			    },
				error: function(res) {
					$state.go('ambulance_not_assigned');
				}
			});

			console.log(position);
		}
		function showError(error){
			console.log(error);
		}
		// Get the geo-location
		if (!_.isEmpty(navigator.geolocation))
	    {
	        navigator.geolocation.getCurrentPosition(showPosition,showError,
	          {
	            enableHighAccuracy : true,
	            timeout : 10000, // 10s
	            //maximumAge : 0
	          }
	        );
	    } else {
	    	var position = {};
	    	position.coords = {};
	    	position.coords.latitude = 12.9094935;
	    	position.coords.longitude = 80.2250325;
	    	showPosition(position);
	    }

	}
})

.controller('ambulanceController', function($scope, $state, $ionicLoading, $cordovaLocalStorage){
	$scope.vehicle = JSON.parse($cordovaLocalStorage.getItem('ambulance')) || {};

	$ionicLoading.hide();
})

.controller('homeController', function($scope, $state, $ionicPopup, $http, $cordovaLocalStorage) {
	
	$scope.goToComplaint = function() {
		$state.go('register');
	}

	$scope.URL = URL;

	function getComplaints() {
		$http({
            method: 'GET',
            url: URL + '/complaint/recent',
        })
        .then(function(res){
        	$scope.complaints = res.data.data;
        	console.log($scope.complaints);
        })
	}

	setInterval(getComplaints,4000);

	$scope.getName = function() {
			$ionicPopup.show({
		      template: '<input type="text" ng-model="user.name">',
		      title: 'Hi. Whats your name?',
		      subTitle: 'Please use normal things',
		      scope: $scope,
		      buttons: [
		        {
		          text: 'Save',
		          type: 'button-positive',
		          onTap: function(e) {
		            if (!$scope.user.name) {
		              //don't allow the user to close unless he enters name
		              e.preventDefault();
		            } else {
		            	console.log("SET :"+$scope.user.name)
		              return $cordovaLocalStorage.setItem('username',$scope.user.name);
		            }
		          }
		        }
		      ]
		    });		   
	}

})