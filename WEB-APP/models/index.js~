var mongoose     = require('mongoose');
var mongoosastic = require('mongoosastic');
var db           = mongoose.connect('mongodb://localhost/bluecross');
var Schema       = mongoose.Schema;

var animalSchema = mongoose.Schema({

    name             : String,
    location         : String

});

module.exports = {
	Animal : mongoose.model('Animal', animalSchema)
}
