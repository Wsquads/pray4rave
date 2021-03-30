
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'secretkey123456';
const bcrypt = require('bcryptjs');
const User = require('../models/users');

var controller = {
    createUser: function(req, res){
        var User = new User();
        var params = req.body;

        User.name = params.name;
        User.nickname = params.nickname;
        User.surname = params.surname;
        User.email= params.email;
        User.birthDate = params.birthDate;
        User.img = params.img;
        User.link = params.link;
        User.timestamps = params.timestamps;
        

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