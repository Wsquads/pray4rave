'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

//schema

var Event = schema({
	
	titulo: String,
	updateDate: Date,
	foto: String,
	descripcion: String,
	etiquetas: String,
	ubicacion: String,
	valoracion: Number

});

//exportar

module.exports = mongoose.model('eventos', Event);