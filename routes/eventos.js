'use strict'

var express = require('express');
var eventController = require('../controllers/eventos');

// router

var router = express.Router();
router.get('/home', eventController.home);
router.post('/test', eventController.test);
router.post('/saveEvent',eventController.saveEvent);
router.get('/getEvent', eventController.getEvent);


module.exports = router;