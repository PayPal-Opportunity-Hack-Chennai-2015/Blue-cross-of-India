var app = angular.module('VolunteerSystem',[]);

app.controller("VolunteerController",['$http',function($http){
	this.availabilityDays = "";
	this.city = "Chennai";
	this.country = "India";
	this.shouldWeCall = false;
	this.changeAvailability = function(day) {
		if (this.availabilityDays.indexOf(day) > -1) {
			this.availabilityDays = this.availabilityDays + "," + day;
		}
	};

	this.callUs = function(boolean) {
		this.shouldWeCall = boolean;
	};
	
	
	this.submitForm = function($http) {
		var volunteerData = $('#regForm').serialize();
		console.log(volunteerData);
//		var request = $http({
//            method: "POST",
//            url: "vms/volunteer/add",
//            data :volunteerData
//            
//        });
		$http.post('/vms/volunteer/add', volunteerData).
		  success(function(data) {
		    $scope.error = false;
		    $scope.data = data;
		  }).
		  error(function(data) {
		    $scope.error = true;
		    $scope.data = data;
		  });
//		$http.ajax(request);
	};
}]);