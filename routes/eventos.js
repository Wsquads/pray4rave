'use strict'

var express = require('express');
var eventController = require('../controllers/eventos');

// router

var router = express.Router();
router.get('/home', eventController.home);
router.post('/test', eventController.test);

module.exports = router;