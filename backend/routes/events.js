'use strict'

var express = require('express');
var eventController = require('../controllers/events');

// router

var router = express.Router();
router.get('/home', eventController.home);
router.post('/test', eventController.test);
router.post('/saveEvent', eventController.saveEvent);
router.get('/getEvent/:id', eventController.getEvent);
router.get('/getEvents', eventController.getEvents);
router.put('/updateEvent/:id', eventController.updateEvent);
router.delete('/deleteEvent/:id', eventController.deleteEvent);




module.exports = router;