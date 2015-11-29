var app = angular.module('VolunteerSystem',[]);

app.controller("VolunteerController",['$http',function($http){
	this.availabilityDays = "";
	this.city = "Chennai";
	this.country = "India";
	this.shouldWeCall = false;
	this.registrationId = "";
	this.changeAvailability = function(day) {
		if (this.availabilityDays.indexOf(day) > -1) {
			this.availabilityDays = this.availabilityDays + "," + day;
		}
	};

	this.callUs = function(boolean) {
		this.shouldWeCall = boolean;
	};
	
	this.submitForm = function() {
		var volunteerData = $('#regForm').serialize();
		var _this = this;
//		$http.post("/vms/volunteer/add", volunteerData).
//		  success(function(response) {
//			  _this.registrationId = response;
//				$('#registration').hide();
//				$('#confirmation').show();
//		  }).error(function() {
//		  });
//		$.ajax({
//				method : "POST",
//			  url: "/vms/volunteer/add",
//			  data: volunteerData
//			}).done(function() {
//				$('#registration').hide();
//				$('#confirmation').show();
//			});
		$.ajax({
	        type: 'POST',
	        dataType: 'json',
	        url: "/vms/volunteer/add",
	        data: volunteerData,
	        success: function(response) {
			  _this.registrationId = response;
				$('#registration').hide();
				$('#confirmation').show();
	        }});
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