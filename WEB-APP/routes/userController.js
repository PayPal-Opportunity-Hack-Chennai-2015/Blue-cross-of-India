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
						status: "error",
						msg   : "Invalid Username / Password"
					});
				}
			}
			else {
				res.status(401);
				res.send({
					status: "error",
					msg   : "User not registered"
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

exports.createAccount = function(req,res) {

	var data = req.body;
	data.password = generateHash(data.password);
	console.log(data)

	User.create(data, function (err, user) {
	  if (err) throw err;
	  console.log("USER CREARTED SUCCESSFULLY")
	});
}

exports.getUserDetails = function(req,res) {

}

exports.signOut = function(req,res) {

}