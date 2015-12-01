/**
 * @author Gnanendra
 *
 */

var Volunteer   = require("../models").Volunteer;
var _ 			= require('underscore');

exports.createVolunteer = function(req,res){

	var vol = {};
	
	(!_.isEmpty(req.query)) ? ( vol = req.query) : (vol = req.body);
	
	Volunteer(vol).save(function(err,newVolunteer){
		if(err) throw err;
		res.status(200);
		res.send(newVolunteer);
	});

}

exports.updateVolunteer = function(req,res){

	var vol = {};
	
	(!_.isEmpty(req.query)) ? ( vol = req.query) : (vol = req.body);

	if( vol._id) {
		Volunteer.findById(vol._id, function(err, volunt) { 

			if(volunt) {

					volunt.firstname	= vol.firstname;
					volunt.lastName		= vol.lastName;
					volunt.email		= vol.email;
					volunt.phone		= vol.phone;
					volunt.address		= vol.address;
					volunt.city			= vol.city;
					volunt.state		= vol.state;
					volunt.country		= vol.country;
					volunt.pincode		= vol.pincode;

					volunt.save();
					res.status(200);
					res.send(volunt);
				}
				else {
					res.status(401);
					res.send({
						status: "Error",
						msg   : "Volunteer not found"
					});
				}
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

exports.deleteVolunteer = function(req,res){

	var _id = req.query._id || req.body._id || "";

	if( _id) {

		Volunteer.remove({ '_id' :  _id }, function(err) { 
			if(!err) {
				res.status(200);
				res.send({
						status: "Success",
						msg   : "Record deleted successfully."
					});
				}
				else {
					res.status(401);
					res.send({
						status: "Error",
						msg   : "Volunteer not found"
					});
				}
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

exports.getVolunteer = function(req,res){

	var _id = req.query._id || req.body._id || "";

	if( _id) {

		Volunteer.findById(_id, function(err, vol) { 
			if(vol) {
				res.status(200);
				res.send(vol);
				}
			else {
				res.status(401);
				res.send({
					status: "Error",
					msg   : "Volunteer not found"
				});
			}
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

exports.getAllVolunteer = function(req,res){

	Volunteer.find({}, function(err, vol) {
		res.status(200);
		res.send(vol);
	});
}