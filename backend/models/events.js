'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

//schema

var EventSchema = schema({
	
	titulo: String,
	updateDate:String,
	foto: String,
	descripcion: String,
	etiquetas: String,
	ubicacion: String,
	valoracion: Number

});

//exportar

module.exports = mongoose.model('Event', EventSchema);