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
	image: String,
	created_at: String,
	role: Number
	
});

//exportar

module.exports = mongoose.model('User', UserSchema);