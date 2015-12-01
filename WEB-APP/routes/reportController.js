/**
 * @author Anuroop
 *
 */

var User     			   = require("../models").User;
var complaint    		   = require("../models").Complaint;
var animalRescueSchema     = require("../models").AnimalRescue;

exports.getComplaints = function(req,res) {

	var d = new Date();
	
	var Timestamp = d.getDate() + "-" + (d.getMonth()+1) + "-" + d.getFullYear();

	complaint.find({ 'timeStamp.date': Timestamp }, function(err, complaints) { 

		if(err) {
			throw err;
		}
		else {
			res.status(200);
			res.send(complaints);
		}		

	}); 
}

exports.getReportForDate = function (req,res) {

	var TimeStamp = req.query.TimeStamp || req.body.TimeStamp || "";
	

	if(TimeStamp) {
		complaint.find({ 'timeStamp.date': TimeStamp },{animalId:1}, function(err, animalIds) { 
			// If the user is available in DB
			if(animalIds.length) {
				animalRescueSchema.find({_id: { $in:animalIds } }, function(err, animalDetails) { 
					if(err) {
						throw err;
					}
					else {
						res.status(200);
						res.json(animalDetails)
					}						

				});
			}
			else {
				res.status(200);
				res.send({
					status: "success",
					msg   : "No Complaints Available"
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


