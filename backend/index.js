'use strict'
var mongoose = require('mongoose');
var app = require('./app');
var config = require('./config.json');



mongoose.Promise = global.Promise;
mongoose.connect(config.bbdd, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log("conexion establecida");

		// crear servidor

		app.listen(config.port, () => {
			console.log("servidor funcionando");
		});

	})
	.catch(err => console.log(err));