'use strict'

var event = require("../models/eventos");

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
		var event = new event();
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

		return res.status(200).send({
			message:"funcionando"
		})
	},
	getEvent: function(req, res){
		var eventId = req.params,id;

		event.findById(eventId, (err, event )=>{

			if(err) return res.status(500).send({message:'error al guardar el evento'});
			if(!event) return res.status(404).send({message:'error al guardar el eventO'});
			return res.status(200).send({event});
		})

	}
};
module.exports = controller;