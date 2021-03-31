
const User = require('../models/users');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'secretkey123456';
const bcrypt = require('bcrypt-nodejs');

var controller = {
    // metodo para guardar un nuevo usuario
    addUser: function(req, res){
        var user = new User();
        var params = req.body;
        if(params.name && params.nickname && params.surname && params.email){
            user.name = params.name;   
            user.nickname = params.nickname;
            user.surname = params.surname;
            user.email= params.email;
            user.birthDate = null;
            user.img = null;
            user.link = params.link;
            user.timestamps = null;

            bcrypt.hash(params.password, null, null, (err, hash) =>{
                user.password = hash;
                user.save((err, userStored)=>{
                    if(err){
                       return res.status(500).send({
                            message: 'error al guardar al usuario'
                        });
                    }
                    if(userStored){
                        res.status(200).send({
                            user: userStored
                        })
                    }else{
                        return res.status(404).send({
                            message: 'no encontrado'
                        })
                    }
                })
            })

        }else{
            res.status(200).send({
                message: 'rellena todos los campos'
            });
        }
    },

    //metodo para devolver los usuarios 
    getUsers: function(req, res){
        User.find({}).exec((err, users) =>{
			if(err) return res.status(500).send({message:'error al mostrar los usuarios'});
			if(!users) return res.status(404).send({message:'no hay usuarios'});
			return res.status(200).send({users});
		});
    }
}

module.exports = controller; 