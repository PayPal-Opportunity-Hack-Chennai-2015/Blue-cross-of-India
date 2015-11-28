var Complaint     = require("../models").Complaint;
var Animal        = require("../models").AnimalRescue;
var Ambulance     = require("../models").Ambulance;
var async         = require('async');
var path          = require('path');


exports.createComplaint = function (req,res) {


	var complaint = {};
	var animal    = {};

	animal.name     = "";
	animal.type     = req.body.animal_type || req.query.animal_type;
	animal.currentLocation = {
		lat: req.body.animal_location.lat || req.query.animal_location.lat,
		lon: req.body.animal_location.lon || req.query.animal_location.lon
	};
	animal.doctor     = "";
	animal.assignedTo = "";
	animal.pic        = req.file.filename + path.extname(req.file.originalname);

	complaint.register_by   = req.body.register_by || req.query.register_by ;
	complaint.registerEmail = req.body.registerEmail || req.query.registerEmail;
	complaint.registerPhone = req.body.registerPhone || req.query.registerPhone;
	complaint.complaintStatus = "REGISTERED";

	// Create a new model for the animal
	Animal(animal).save(function(err, _animal) {
		// Create a new model for the complaint
		complaint.animalId  = _animal._id;
		complaint.timeStamp = new Date();

		Complaint(complaint).save(function(err, _complaint) {
			// Once the complaint has been created, assign the nearest ambulance
			/*Ambulance.find({
				currentLocation: {
					
				}
			});*/
		});

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