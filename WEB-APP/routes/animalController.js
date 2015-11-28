var Animal     = require("../models").Animal;


exports.getAnimals = function (req,res,next) {
		Animal.find({}, function(err,animal){ 
			console.log(animal);			
			if(animal) 
			{
				
				res.status(200);
				res.json(animal);
			}
			else 
			{
				res.status(401);
				res.send({
					status: "error",
					msg   : "User not registered"
				});
			}
		});	
}
