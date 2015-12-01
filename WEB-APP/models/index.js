/**
 * @author Rakesh
 *
 */

var mongoose     = require('mongoose');
var mongoosastic = require('mongoosastic');
var db           = mongoose.connect('mongodb://localhost/bluecross');
var Schema       = mongoose.Schema;

var animalSchema = mongoose.Schema({
    name             : String,
    subcategory      : []
});

var userSchema = mongoose.Schema( {
	username    :{ type: String, required: true, trim: true, index: { unique: true } },
	password    :{ type: String, required: true },
	email       :{ type:String, required: true, trim: true },
	phoneNumber :{ type:String, required: true, trim: true },
	firstName   :{ type:String, required: true, trim: true},
	lastName    :{ type:String, required: true, trim: true}
});

var animalRescueSchema = mongoose.Schema({

	name 	 :{ type: String, trim: true },
	type     :{ type: String, trim: true},
	location : [],
	currentLocation: {},
	state     : [],
	treatment : [],
	doctor    : { type: String, trim: true },
	pic       :   String,
	assignedTo: String 
});

var ambulance = mongoose.Schema({
	vehicleNumber	   : { type: String, required: true, trim: true },
	driverName         : { type: String, required: true, trim: true },
	driverContactNumber: { type: String, required: true, trim: true },
	location           : [],
	currentLocation    : {  type: [Number],  index: '2d'},
	capacity           : Number,
	load               : Number,
	assignedTo         : String,
	assignedToOrdinate : {},
	isEmergency        : Boolean
});

var complaint = mongoose.Schema({
	animalId  		: { type: String, required: true, trim: true },
	registerBy		: { type: String, required: true, trim: true  },
	registerEmail	: { type: String, required: true, trim: true },
	registerPhone	: { type: String, required: true, trim: true },
	complaintStatus : { type: String, required: true, trim: true},
	comments		: { type: String },
	pic             : { type: String },
	timeStamp       : {  date: String, time: String  }
});

var volunteer = mongoose.Schema({
	firstname  		: { type: String, required: true, trim: true },
	lastName		: { type: String, required: true, trim: true },
	email			: { type: String, required: true, trim: true },
	phone			: { type: String, required: true, trim: true },
	address			: { type: String, trim: true},
	city			: { type: String, trim: true},
	state       	: { type: String, trim: true},
	country			: { type: String, trim: true},
	pincode			: { type: String, trim: true}
});

var adoption = mongoose.Schema({
	name     : { type: String, required: true, trim: true },
	type     : { type: String, trim: true },
	age      : { type: String, trim: true },
	gender   : { type: String, tim: true },
	details  : { type: String },
	pic      : [],
	contact  : { type: Number },
	posted_by: { type: String, trim: true },
	timeStamp: { date: String, time: String }
});

module.exports = {
	Animal 			: mongoose.model('Animal', animalSchema),
	User 			: mongoose.model('User', userSchema),
	AnimalRescue  	: mongoose.model('AnimalRescue', animalRescueSchema),
	Ambulance 		: mongoose.model('Ambulance', ambulance),
	Complaint       : mongoose.model('Complaint', complaint),
	Volunteer		: mongoose.model('Volunteer', volunteer),
	Adoption        : mongoose.model('Adoption', adoption)
}
