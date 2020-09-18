const User = require('./auth/auth.dao');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'secretkey123456';
const bcrypt = require('bcryptjs');
const Miembro = require('../models/miembros');

var controller = {
    createUser: function(req, res){
        var User = new Miembro();
        var params = req.body;

        User.nombre = params.nombre;
        User.birthDate = params.birthDate;
        User.foto = params.foto;
        User.etiquetas = params.etiquetas;
        User.apellidos = params.apellidos;
        

        User.save((err, userStored) =>{
            if(err) return res.status(500).send('server error');
            const expiresIn = 24*60*60;
            const accesToken = jwt.sign({id: userStored.id},
            SECRET_KEY, {
                expiresIn: expiresIn
            });
            res.status(200).send(userStored);
        } );

    }
}

exports.exports = controller; 