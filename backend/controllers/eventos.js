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
		var eventId = req.params.id;


		Event.findById(eventId, (err, event) => {
			if(err) return res.status(500).send({message:'error al guardar el evento'});
			if(!event) return res.status(404).send({message:'error al guardar el eventO'});
			return res.status(200).send({
				event
			});
		})

	},

	getEvents: function(req, res){

		Event.find({}).exec((err, events) =>{
			if(err) return res.status(500).send({message:'error al guardar los eventos'});
			if(!events) return res.status(404).send({message:'error mientras devuelve los eventos'});
			return res.status(200).send({events});
		});
	},

	updateEvent: function(req, res){

		var eventId = req.params.id;
		var update = req.body;

		Event.findByIdAndUpdate(eventId, update, {new:true}, (err, eventUpdate) => {
			if(err) return res.status(500).send({message:'error al guardar el evento'});
			if(!eventUpdate) return res.status(404).send({message:'error al guardar el eventO'});
			return res.status(200).send({event: eventUpdate});
		});
	},

	deleteEvent: function(req, res){

		var eventId = req.params.id;

		Event.findByIdAndRemove(eventId, (err, event) =>{
			if(err) return res.status(500).send({message:'error al recoger el evento'});
			if(!event) return res.status(404).send({message: 'error al guardar el cambio'});
			return res.status(200).send({event});
		});
	}
};
module.exports = controller;