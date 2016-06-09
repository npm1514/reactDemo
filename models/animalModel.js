//set up a model for our animal data

var mongoose = require('mongoose');

var animalSchema = new mongoose.Schema({
	name: { type: String, required: true}, 
	species: { type: String, required: true}, 
	color: { type: String, required: true}, 
	age: { type: Number, required: false}
});

module.exports = mongoose.model('Animals', animalSchema);