'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var morgan = require('morgan');
var path = require('path');




var app = express();


//middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgan('dev'));



//cargar rutas

var events  = require('./routes/events');
var auth  = require('./routes/auth');
//rutas

app.use('/api', events);
app.use('/auth', auth);

// exportar
module.exports = app;

