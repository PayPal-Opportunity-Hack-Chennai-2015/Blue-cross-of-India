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
		$.ajax({
				method : "POST",

			  url: "/vms/volunteer/add",
			  data: volunteerData
			}).done(function() {
			  $( this ).addClass( "done" );
			});

	};
	
	this.getStatus = function(status) {
		$.ajax({
			method : "POST",
			  url: "/vms/getByStatus/status"
			}).done(function() {
			  $( this ).addClass( "done" );
			});

	};
		
	
}]);