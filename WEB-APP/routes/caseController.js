var Complaint     = require("../models").Complaint;
var Animal        = require("../models").AnimalRescue;
var Ambulance     = require("../models").Ambulance;
var async         = require('async');
var path          = require('path');
var _             = require('underscore');

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
	if(_.isEmpty(req.file)) {
		animal.pic = "";
	}
	else {
		animal.pic = req.file.filename + path.extname(req.file.originalname);
	}

	complaint.registerBy   = req.body.register_by || req.query.register_by || "";
	complaint.registerEmail = req.body.registerEmail || req.query.registerEmail || "";
	complaint.registerPhone = req.body.registerPhone || req.query.registerPhone || "";
	complaint.complaintStatus = "REGISTERED";
	complaint.timeStamp = new Date();

	console.log("ANIMAL:"+ JSON.stringify(animal));

	var _animal, _complaint = {}

	async.series([

		function(callback) {
			// Create a new model for the animal
			Animal(animal).save(function(err, d_animal) {
				if(err) console.log("ERROR IN CREATING ANIMAL")
				_animal = d_animal;
				callback(null, "DONE");
			});
		},

		function(callback) {
			// Create a new model for the complaint
			complaint.animalId  = _animal._id;
			complaint.timeStamp = new Date();

			Complaint(complaint).save(function(err, d_complaint) {
				if(err) console.log(err);
				_complaint = d_complaint;
				console.log("COMPLAINT CREATED")
				callback(null, "DONE");
			});
		},

		function(callback) {
			var maxDistance = 50/6371;
			// Once the complaint has been created, assign the nearest ambulance
			Ambulance.find({
				currentLocation: {
					$near: [ animal.currentLocation.lat, animal.currentLocation.lon ],
					$maxDistance: maxDistance
				}
			})

			.limit(1)

			.exec(function(err, ambulance){
				if(err) console.log(err);
				Ambulance.findById(ambulance[0]._id, function(err, n_ambulance){
					if(err) throw err;
					n_ambulance.assignedTo = _complaint._id;
					n_ambulance.save();
					console.log("AMBULANCE ASSIGNED")
					callback(null, n_ambulance);
				});			
				
			});
		}

		], function(err, _ambulance){
			res.status(200);
			res.send(_ambulance);
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