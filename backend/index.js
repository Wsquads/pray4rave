'use strict'
var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/pray4rave', { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log("conexion establecida");

		// crear servidor

		app.listen(port, () => {
			console.log("servidor funcionando");
		});

	})
	.catch(err => console.log(err));