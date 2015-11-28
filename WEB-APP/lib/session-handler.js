/*
* Session Handler is responsible for authentication of token from redis
* and also creating new tokens
*/

var redis  = require('redis').createClient();
var config = "55884e61e8cfdf0cba904102";
var jwt    = require('jsonwebtoken');

exports.isAuthenticated = function(req,res,next) {
	var token = req.body.token || req.query.token || req.headers['x-access-token'];

	if(!token) {
		res.status(401);
		res.json({ "error": "Unauthenticated Request" });
	}
	else {

		jwt.verify(token, config.key, function(err, data) {
		    if(err) {
			  	res.status(401);
			  	res.json({ "error": "Invalid token"});
		    }
		    else {
		    	// Check for expiration of the token
				if(data.expires > Date.now()) {
					redis.get(token, function(err,reply) {
						if(reply) {
							var data = JSON.parse(reply)
							req.user = data.user;
							req.cart = data.cart;
							req.deal = data.deal;
							req.token = token;
							next();
						}
						else {
							res.status(401);
							res.json({ "error": "Invalid token" });
						}
					})
				}
				else {
					res.status(401);
					res.json({ "error": "Token Expired"});
				}
		    }
		});
	}
}

exports.signIn = function(req,res) {
	var token_expires = Date.now() + 2630000000; // Token validity is one month
	var token = jwt.sign({ expires: token_expires }, config.key);

	// Once the token has been generated, put it in redis storage
	if(req.user) {
		var data = { cart: [], user: req.user, deal: []  }
		redis.set(token, JSON.stringify(data))
		// Return the token to the client
		res.json({ "token": token })
	}
	else{
		res.status(404);
		res.json({ "error": "Invalid Request"})
	}
}

exports.updateData = function(req) {
	// Update the new data with the redis data
	var data = {
		user : req.user,
		cart : req.cart,
		deal : req.deal
	}

	var token = req.token;
	if(token) {
		redis.set(token, JSON.stringify(data));	
	}
	
}; 