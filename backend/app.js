'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();


//middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//cargar rutas

var events  = require('./routes/events');
var auth  = require('./routes/auth');
//rutas

app.use('/api', events);
app.use('/auth', auth);

// exportar
module.exports = app;

