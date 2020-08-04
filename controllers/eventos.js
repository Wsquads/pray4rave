'use strict'

var Event = require("../models/eventos");

var controller = {
	home: function(req, res){
		return res.status(200).send({
			message: 'Soy la home'
		});
	},
	test: function(req, res){
		return res.status(200).send({
			message: 'Soy el controlador de eventos'
		});
		
	},
	saveEvent: function(req, res){
		var event = new Event();
		var params = req.body;
		
		event.titulo = params.titulo;
		event.updateDate = params.updateDate;
		event.foto = params.foto;
		event.descripcion = params.descripcion;
		event.etiquetas = params.etiquetas;
		event.ubicacion = params.ubicacion;
		event.valoracion = params.valoracion;

		event.save((err, eventStored) => {
			if(err) return res.status(500).send({message:'error al guardar el evento'});
			if(!eventStored) return res.status(404).send({message:'error al guardar el eventO'});
			return res.status(200).send({event: eventStored});
			
		});
	},
	getEvent: function(req, res){
		var eventId = req.params,id;

		if(eventId == null) return res.status(404).send({message: 'el evento no existe'});

		Event.findById(eventId, (err, event) => {
			if(err) return res.status(500).send({message:'error al guardar el evento'});
			if(!event) return res.status(404).send({message:'error al guardar el eventO'});
			return res.status(200).send({
				event
			});
		})

	}
};
module.exports = controller;