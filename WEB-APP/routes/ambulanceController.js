var ambulance   = require("../models").Ambulance;
var _ 			= require('underscore');

exports.createAmbulance = function(req,res){

	var amb = {};
	
	if(!_.isEmpty(req.query)){
		amb = req.query;
	}
	else {
		amb = req.body;
	}

	var newAmbulance = new ambulance(amb);

	newAmbulance.save(function (err) {
	  if (err) {
			return err;
	  }
	  else {
		res.status(200);
		res.send({
				status: "SUCCESS",
				msg   : "Ambulance added successfully"
			});
	  }
	});
}

exports.updateAmbulance = function(req,res){
	
	var amb = {};
	
	if(!_.isEmpty(req.query)){
		amb = req.query;
	}
	else {
		amb = req.body;
	}
	if( amb._id) {
		ambulance.findOne({ '_id' :  _id }, function(err, ambulan) { 
			if(ambulan) {
				res.status(200);
				res.send(ambulan);
				ambulan.location.push({
					lat: ambulan.currentLocation
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

exports.deleteAmbulance = function(req,res){
	var _id = req.query._id || req.body._id || "";
	if( _id) {
		ambulance.remove({ '_id' :  _id }, function(err) { 
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

exports.getAmbulance = function(req,res){
	var _id = req.query._id || req.body._id || "";
	if( _id) {
		ambulance.findOne({ '_id' :  _id }, function(err, amb) { 
			console.log(amb)
			if(amb) {
				res.status(200);
				res.send(amb);
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

exports.getAllAmbulance = function(req,res){
		ambulance.find({}, function(err, amb) { 
			console.log(amb)
			if(amb) {
				res.status(200);
				res.send(amb);
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