'use strict'

const Users = require('../controllers/auth');
const express = require('express');

var router = express.Router();
router.post('/addUser', Users.addUser);
router.get('/getUsers', Users.getUsers);
// router.post('/login', Users.loginUser);


module.exports = router;