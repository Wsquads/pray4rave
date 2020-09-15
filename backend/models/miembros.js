'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

//schema

var MiembrosSchema = Schema({
	id: Number,
	nombre: String,
	birthDate: Date,
	foto: String,
	descripcion: String,
	etiquetas: String,
	apellidos: String,
	pseudonimo: String

});

//exportar

module.exports = mongoose.model('miembros', MiembrosSchema);