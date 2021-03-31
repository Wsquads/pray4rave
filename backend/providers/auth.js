'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
const SECRET_KEY = 'secretkey_12345lfhslkdfjhlsfdbs_ASDFASDsbfwjekhhfl6$laura%dfsdf¬SFDSDFJKSyaud65a7sd0';

exports.createToken = function(user){
    var payload = {
        sub: user._id,
        name: user.name,
        role: user.role,
        surname: user.surname,
        email: user.email,
        image: user.img,
        create_at: moment(),
        expires_at: moment().add(30, 'minutes')
    };
    return jwt.encode(payload, SECRET_KEY);
}