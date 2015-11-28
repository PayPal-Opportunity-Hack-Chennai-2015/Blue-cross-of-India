var Complaint     = require("../models").Complaint;
var Animal        = require("../models").AnimalRescue;
var async         = require('async');



exports.createComplaint = function (req,res) {

	var complaint = {};
	var animal    = {};

	animal.name     = "";
	animal.type     = req.body.animal_type || req.query.animal_type;
	animal.location = {
		lat: req.body.animal_location.lat,
		lon: req.body.animal_location.lon
	})
	animal.doctor     = "";
	animal.assignedTo = "";

	// Create a new model for the animal
	Animal(animal).save(function(err, _animal) {

	});


}

exports.getComplaintDetails = function(req,res) {
	var complaintId = req.body.id || req.query.id || "";
	if(complaintId) {
		Complaint.findById(complaintId, function(err,complaint) {
			res.status(200);
			res.send({
				status: "success",
				data  : complaint
			});
		});
	}
	else {
		res.status(400);
		res.send({
			status: "error",
			msg   : "Missing Parameters"
		});
	}
}