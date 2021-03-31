'use strict'

const Users = require('../controllers/auth');
const express = require('express');

var router = express.Router();
router.post('/addUser', Users.addUser);
router.post('/login', Users.login);
router.get('/getUsers', Users.getUsers);
router.get('/getUser/:id', Users.getUser);
router.delete('/deleteUser/:id', Users.deleteUser);
router.put('/updateUser/:id', Users.updateUser);

// router.post('/login', Users.loginUser);


module.exports = router;