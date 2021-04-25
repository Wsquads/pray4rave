'use strict'

// importamos las librerias necesarias para hacer el middleware

var jwt = require('jwt-simple');
var moment = require('moment');
var config = require('../config.json');

// creamos el middlewre

exports.ensureAuth = function(req, res, next){
    if(!req.headers.authorization){
        console.log(req.headers);
        return res.status(403).send({
            message: 'la peticion no tiene la caabecera de autentitacion'
        });
    }
    var token = req.headers.authorization.replace(/['"]+/g, '');
    try{
        var payload = jwt.decode(token, config.SECRET_KEY);
        if(payload.exp <= moment().unix()){
            return res.status(401).send({
                message:'el token a expirado'
            })
        }
    }catch(ex){
        return res.status(404).send({
            message:'el token no es valido'
        })
    }
    req.user = payload;
    next();
}
