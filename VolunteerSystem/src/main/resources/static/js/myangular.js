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
	this.volunteersList = null;

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
		var _this=this;
		/*$http.get("/vms/volunteer/getByStatus/"+status).success(function(data) {
			console.log("data"+data);
			_this.volunteersList = data;
		});*/
		
		$.ajax({
			method : "GET",
			  url: "/vms/volunteer/getByStatus/"+status
			}).done(function(data) {
				_this.volunteersList = data;
			});

	};
		
	
}]);