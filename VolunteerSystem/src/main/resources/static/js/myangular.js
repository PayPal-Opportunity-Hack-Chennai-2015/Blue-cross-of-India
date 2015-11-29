var app = angular.module('VolunteerSystem',[]);

app.controller('VolunteerController',function($scope, $http){
	this.availabilityDays = "";
	this.changeAvailability = function(day) {
		this.availabilityDays = this.availabilityDays + "," + day;
	};
	var volunteerData = $('#regForm').serialize();
	console.log(volunteerData);
	this.submitForm = function($http) {
		var request = $http({
            method: "POST",
            url: "vms/volunteer/add",
            data :volunteerData
            
        });
		$http.ajax(request);
	};
});