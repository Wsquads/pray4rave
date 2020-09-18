const Users = require('../controllers/auth');
const express = require('express');

var router = express.router();
router.post('/register', Users.createUser);
router.post('/login', Users.loginUser);


module.exports = router;