'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

//schema

var MiembrosSchema = Schema({
	
	nombre: String,
	birthDate: Date,
	foto: String,
	etiquetas: String,
	apellidos: String

});

//exportar

module.exports = mongoose.model('Miembro', MiembrosSchema);