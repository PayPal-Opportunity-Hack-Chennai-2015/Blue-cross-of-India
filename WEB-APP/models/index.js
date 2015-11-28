var mongoose     = require('mongoose');
var mongoosastic = require('mongoosastic');
var db           = mongoose.connect('mongodb://localhost/bluecross');
var Schema       = mongoose.Schema;

var animalSchema = mongoose.Schema({

    name             : String,
    subcategory  : []

});

var userSchema = mongoose.Schema( {

	username:{ type: String, required: true, trim: true, index: { unique: true } },
	password:{ type: String, required: true },
	email: { type:String, required: true, trim: true },
	phoneNumber:{ type:String, required: true, trim: true },
	firstName:{ type:String, required: true, trim: true},
	lastName:{ type:String, required: true, trim: true}
});

var animalRescueSchema = mongoose.Schema({

	name:{ type: String, required: true, trim: true },
	type:{ type: String, required: true, trim: true},
	location: [],
	state: [],
	treatment: [],
	doctor: { type: String, required: true, trim: true },
	pic:   String,
	assignedTo: String 
})


module.exports = {
	Animal : mongoose.model('Animal', animalSchema),
	User : mongoose.model('User', userSchema),
	AnimalRescue  : mongoose.model('AnimalRescue', animalRescueSchema)
}
