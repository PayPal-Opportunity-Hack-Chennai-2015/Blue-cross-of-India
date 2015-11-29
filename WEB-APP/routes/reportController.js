var User     = require("../models").User;
var bcrypt   = require('bcrypt-nodejs');
var complaint    = require("../models").Complaint;
var animalRescueSchema     = require("../models").AnimalRescue;


exports.getComplaints = function(req,res) {

	var d = new Date();
	
	var Timestamp = d.getDate() + "-" + (d.getMonth()+1) + "-" + d.getFullYear();

	complaint.find({ 'timeStamp.date': Timestamp }, function(err, complaints) { 

		if(err) {
			console.log(err);
		}
		res.status(200);
		res.send(complaints);

	}); 
}

exports.getReportForDate = function (req,res) {
	var TimeStamp = req.query.TimeStamp || req.body.TimeStamp || "";
	

	if( TimeStamp) {
		complaint.find({ 'timeStamp.date': TimeStamp },{animalId:1}, function(err, animalIds) { 
			// If the user is available in DB
			if(animalIds.length) {
				animalRescueSchema.find({_id:{$in:animalIds}}, function(err, animalDetails) { 
			
					// If the user is available in DB
					if(animalDetails) {
						res.status(200);
						res.json(animalDetails)
					}
					else {
						res.status(200);
						res.send({
							status: "success",
							msg   : "No Animals Available"
						});
					}
				});
			}
			else {
				res.status(200);
				res.send({
					status: "success",
					msg   : "No Complaint Available"
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


