'use strict'

const Users = require('../controllers/auth');
const express = require('express');
var mdAuth = require('../middlewares/auth');


  



var router = express.Router();
router.post('/addUser', Users.addUser);
router.post('/login', Users.login);
router.get('/getUsers', mdAuth.ensureAuth, Users.getUsers);
router.get('/getUser/:id', Users.getUser);
router.delete('/deleteUser/:id', mdAuth.ensureAuth, Users.deleteUser);
router.put('/updateUser/:id',mdAuth.ensureAuth, Users.updateUser);
router.post('/uploadImg/:id', [mdAuth.ensureAuth], Users.uploadImg);





module.exports = router;