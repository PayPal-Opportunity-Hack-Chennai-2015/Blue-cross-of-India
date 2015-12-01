/**
 * @author Raghav
 *
 */

var User     = require("../models").User;
var bcrypt   = require('bcrypt-nodejs');

// generating a hash
function generateHash (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
function validPassword (submitted_password, db_password) {
    return bcrypt.compareSync(submitted_password, db_password);
};


exports.signIn = function (req,res,next) {
	
	var email = req.query.email || req.body.email || "";
	var password = req.query.password || req.body.password || "";

	if( email && password ) {
		User.findOne({ 'email' :  email }, function(err, user) { 
			console.log(user)
			// If the user is available in DB
			if(user) {
				// Authenticate the password
				if( validPassword(password, user.password) ){
					req.user = user;
					next();
				}
				else {
					res.status(401);
					res.send({
						status: "Error",
						msg   : "Invalid Username / Password"
					});
				}
			}
			else {
				res.status(401);
				res.send({
					status: "Error",
					msg   : "User not registered"
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

exports.createAccount = function(req,res) {

	var data = req.body || req.query;
	// Generate hashed password
	data.password = generateHash(data.password);

	User.create(data, function (err, user) {
		if (err) {
		  throw err;
		}

		if(user) {
		  res.status(200);
		  res.send(user);
		}
		else {
		  res.status(500);
		  res.send({
		  	status: "Error",
		  	msg   : "Error in creating new user"
		  });
		} 
	  
	});
}

exports.getUserDetails = function(req,res) {

}

exports.signOut = function(req,res) {

}