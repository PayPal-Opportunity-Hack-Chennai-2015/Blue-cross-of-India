/**
 * @author Raghav
 *
 */

var Complaint     = require("../models").Complaint;
var Animal        = require("../models").AnimalRescue;
var Ambulance     = require("../models").Ambulance;
var async         = require('async');
var path          = require('path');
var _             = require('underscore');

exports.createComplaint = function (req,res) {

	var complaint = {};
	var animal    = {};

	var d = new Date();
	
	var timestamp = { 
		date : d.getDate() + "-" + (d.getMonth()+1) + "-" + d.getFullYear(),
		time : d.getHours() + ":" + d.getMinutes()
	}

	animal.name     = "";
	animal.type     = req.body.animal_type || req.query.animal_type || "";

	var temp_loc    = req.body.animal_location.split(",");

	animal.currentLocation = {
		lat: temp_loc[0],
		lon: temp_loc[1]
	};

	animal.doctor     = "";
	animal.assignedTo = "";

	if(_.isEmpty(req.file)) {
		animal.pic = "";
	}
	else {
		animal.pic = req.file.filename;
	}

	complaint.registerBy      = req.body.register_by || req.query.register_by || "";
	complaint.registerEmail   = req.body.registerEmail || req.query.registerEmail || "";
	complaint.registerPhone   = req.body.registerPhone || req.query.registerPhone || "";
	complaint.complaintStatus = "REGISTERED";
	complaint.pic             = animal.pic;
	complaint.timeStamp       = {  date: timestamp.date, time: timestamp.time  };

	var _animal, _complaint = {}

	async.series([

		function(callback) {
			// Create a new document for the animal
			Animal(animal).save(function(err, d_animal) {
				if(err) console.log("ERROR IN CREATING ANIMAL: " + err);
				_animal = d_animal;
				callback(null, "DONE");
			});
		},

		function(callback) {

			// Create a new document for the complaint
			complaint.animalId  = _animal._id;
			complaint.timeStamp = timestamp;

			Complaint(complaint).save(function(err, d_complaint) {
				if(err) console.log("ERROR IN CREATING COMPLAINT: " + err);
				_complaint = d_complaint;
				callback(null, "DONE");
			});
		},

		function(callback) {
			// Once the complaint has been created, assign the nearest ambulance
			Ambulance.find({
				currentLocation: {
					$near: [ animal.currentLocation.lat, animal.currentLocation.lon ]
				}
			})

			.limit(1)

			.exec(function(err, ambulance){
				if(err) console.log("ERROR IN ASSIGNING AMBULANCE: " + err);
				if(ambulance.length > 0) {
					Ambulance.findById(ambulance[0]._id, function(err, n_ambulance){
						if(err) throw err;
						n_ambulance.assignedTo         = _complaint._id;
						n_ambulance.assignedToOrdinate = {

							lat: animal.currentLocation.lat,
							lon: animal.currentLocation.lon
						};
						n_ambulance.save();
						console.log("AMBULANCE ASSIGNED SUCCESSFULLY");
						callback(null, n_ambulance);
					});	
				}
				else {
					callback("NO_AMBULANCE_AVAILABLE");
				}
						
				
			});
		}

		], function(err, _ambulance){
			if(err) {
				res.status(200);
				res.send({ status: "unavailable", msg: "No Ambulance Available"})
			}
			else {
				res.status(200);
				res.send({ status: "assigned", data: _ambulance[2] });
			}	
			
	});
}

exports.getRecentComplaints = function(req,res) {
	Complaint.find({}, function(err,complaints) {
			res.status(200);
			res.send({
				status: "Success",
				data  : complaints.reverse()
			});
		});
}

exports.getComplaintDetails = function(req,res) {
	var complaintId = req.body.id || req.query.id || "";
	if(complaintId) {
		Complaint.findById(complaintId, function(err,complaint) {
			res.status(200);
			res.send({
				status: "Success",
				data  : complaint
			});
		});
	}
	else {
		res.status(400);
		res.send({
			status: "Error",
			msg   : "Missing Parameters"
		});
	}
}