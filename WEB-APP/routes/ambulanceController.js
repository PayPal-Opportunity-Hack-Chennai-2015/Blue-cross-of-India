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
	
	ambulance(amb).save(function(err,_amb){
		if(err){
			res.status(400);
			res.send({
				status: "error",
				msg   : "Vehicle / Mobile Number already registered"
			})
		} 
		else {
			res.status(200);
			res.send(_amb);
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
				if(amb.vehicleNumber){
					ambulan.vehicleNumber=amb.vehicleNumber;
				}
				if(amb.driverName){
					ambulan.driverName=amb.driverName;
				}
				if(amb.driverContactNumber){
					ambulan.driverContactNumber=amb.driverContactNumber;
				}
				if(amb.capacity){
					ambulan.capacity=amb.capacity;
				}
				if(amb.load){
					ambulan.load=amb.load;
				}
				if(amb.isEmergency){
					ambulan.isEmergency=amb.isEmergency;
				}
				if(amb.currentLocation){
					ambulan.location.push({"lang":amb.currentLocation,"timeStamp":new Date()});
					ambulan.currentLocation=amb.currentLocation;
				}
				ambulan.save();
				res.status(200);
				res.send(ambulan);
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
	console.log("nnnnnnnn"+_id)
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
		ambulance.findById(_id, function(err, amb) { 
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