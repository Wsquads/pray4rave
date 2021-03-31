'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//schema

var UserSchema = Schema({
	
	name: String,
	nickname: String,
	surname: String,
	email: String,
	password: String,
	birthDate: Date,
	link: String,
	img: String,
	timestamps: String
	
});

//exportar

module.exports = mongoose.model('User', UserSchema);