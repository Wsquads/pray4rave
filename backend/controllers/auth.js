
const User = require('../models/users');
var moment = require('moment');
var jwt  =require('../providers/auth');
const bcrypt = require('bcrypt-nodejs');
const thisMoment = moment();

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
            user.role = 0;
            user.link = params.link;
            user.created_at = thisMoment;
            
            // comprobamos que el usuario no exista
            User.find({
                $or: [
                    {email: user.email.toLowerCase()},
                    {nickname: user.nickname.toLowerCase()}

                ]}).exec((err, users)=>{
                    if(err){
                        return res.status(500).send({message: 'error en la peticion'});
                    }
                    if(users && users.length>=1){
                        return res.status(200).send({message:'el usuario ya existe'});
                    }else{

                        // hacemos hash a la contraseña y enviamos el resultado
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
                    }
                });

        }else{
            res.status(200).send({
                message: 'rellena todos los campos'
            });
        }
    },
    
    // metodo de login
    login: function(req, res){
        var params = req.body;
        var email = params.email;
        var password = params.password;
        User.findOne({email: email},  function(err, user){
            if(err) return res.status(500).send({message: 'error en la peticion'});
            if(user){
                bcrypt.compare(password, user.password, function(err, ok){
                    if(ok){
                        if(params.getToken){
                            return  res.status(200).send({
                                token: jwt.createToken(user)
                            });
                        }else{
                            user.password = undefined;
                            return res.status(200).send({user: user});

                        }
                    }else if(err){
                        return res.status(404).send({message: 'error en log de usuario'});
                    }
                });
            }else{
                return res.status(404).send({message: 'el usuario no se ha encontrado'});
            }
        });

    },
    //metodo para devolver los usuarios 
    getUsers: function(req, res){
        User.find({}).exec((err, users) =>{
			if(err) return res.status(500).send({message:'error al mostrar los usuarios'});
			if(!users) return res.status(404).send({message:'no hay usuarios'});
			return res.status(200).send({users});
		});
    },

    // metodo para devolver usuario en base a un id
    getUser: function(req, res){
        var userId = req.params.id;

        User.findById(userId, (err, user) =>{
			if(err) return res.status(500).send({message:'error al mostrar el usuario'});
			if(!user) return res.status(404).send({message:'no hay ningun usuario'});
			return res.status(200).send({user});
		});
    },

    // metodo para eliminar un usuario
    deleteUser: function(req, res){
        var userId = req.params.id;

		User.findByIdAndRemove(userId, {useFindAndModify: false}, (err, userRemove) =>{
			if(err) return res.status(500).send({message:'error al eliminar el usuario'});
			if(!userRemove) return res.status(404).send({message: 'no existe el usuario'});
			return res.status(200).send({user: userRemove});
		});
    },

    // metodo para actualizar un usuario
    updateUser: function(req, res){
        var userId = req.params.id;
		var update = req.body;

		User.findByIdAndUpdate(userId, update, {new:true, useFindAndModify: false}, (err, userUpdate) => {
			if(err) return res.status(500).send({message:'error al guardar el evento'});
			if(!userUpdate) return res.status(404).send({message:'error al guardar el eventO'});
			return res.status(200).send({event: userUpdate});
		});
    }

}

module.exports = controller; 