'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();


//middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//cargar rutas

var events  = require('./routes/events');

//rutas

app.use('/api', events);

// exportar
module.exports = app;

