const Usuario = require('../models/Usuario')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass) {
        if(err) {
            res.json({
                error: err
            })
        }
        let usuario = new Usuario({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedPass
        })
        usuario.save()
        .then(response  => {
            res.json({
                message: 'Usuario add!'
            })
        })
        .catch(error => {
            res.json({
                message: 'Erro'
            })
        })
    })
}

const login = (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    Usuario.findOne({$or: [{email: username}, {phone: username}]})
    .then(usuario => {
        if(usuario){
            bcrypt.compare(password, usuario.password, function(err, result){
                if(err) {
                    res.json({
                        error: err
                    })
                }
                if(result) {
                    let token = jwt.sign({name: usuario.name}, 'BxA,IY)0(', {expiresIn: '1h'})
                    res.json({
                        message: 'Login Success',
                        token
                    })
                } else {
                    res.json({
                        message: 'Password does not matched'
                    })
                }
            })
        } else {
            res.json({
                message: 'Erro'
            })
        }
    })
}

module.exports = {
    register, login
}