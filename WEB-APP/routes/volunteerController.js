var volunteer   = require("../models").Volunteer;
var _ 			= require('underscore');

exports.createVolunteer = function(req,res){

	var vol = {};
	
	if(!_.isEmpty(req.query)){
		vol = req.query;
	}
	else {
		vol = req.body;
	}
	
	console.log(vol);
	volunteer(vol).save(function(err,_vol){
		if(err) throw err;
		res.status(200);
		res.send(_vol);
	});


}

exports.updateVolunteer = function(req,res){
	console.log(req);
	var vol = {};
	
	if(!_.isEmpty(req.query)){
		vol = req.query;
	}
	else {
		vol = req.body;
	}
	if( vol._id) {
		volunteer.findById(vol._id, function(err, volunt) { 
			if(volunt) {
				if(vol.firstname){
					volunt.firstname=vol.firstname;
				}
				if(vol.lastName){
					volunt.lastName=vol.lastName;
				}
				if(vol.email){
					volunt.email=vol.email;
				}
				if(vol.phone){
					volunt.phone=vol.phone;
				}
				if(vol.address){
					volunt.address=vol.address;
				}
				if(vol.city){
					volunt.city=vol.city;
				}
				if(vol.state){
					volunt.state=vol.state;
				}
				if(vol.country){
					volunt.country=vol.country;
				}
				if(vol.pincode){
					volunt.pincode=vol.pincode;
				}
				volunt.save();
				res.status(200);
				res.send(volunt);
				}
				else {
					res.status(401);
					res.send({
						status: "error",
						msg   : "please  pass a proper id"
					});
				}
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

exports.deleteVolunteer = function(req,res){
	var _id = req.query._id || req.body._id || "";
	console.log("nnnnnnnn"+_id)
	if( _id) {
		volunteer.remove({ '_id' :  _id }, function(err) { 
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
						status: "error",
						msg   : "please  pass a proper id"
					});
				}
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

exports.getVolunteer = function(req,res){
	var _id = req.query._id || req.body._id || "";
	if( _id) {
		volunteer.findById(_id, function(err, vol) { 
			if(vol) {
				res.status(200);
				res.send(vol);
				}
				else {
					res.status(401);
					res.send({
						status: "error",
						msg   : "please  pass a proper id"
					});
				}
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

exports.getAllVolunteer = function(req,res){
		volunteer.find({}, function(err, vol) { 
			console.log(vol)
			if(vol) {
				res.status(200);
				res.send(vol);
			}
			else {
					res.status(401);
					res.send({
						status: "error",
						msg   : "please pass a proper id"
					});
				}
		});
}