const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, 'BxA,IY)0(')

        req.usuario = decode
        next()
    }
    catch(error) {
        res.json({
            mensagem: 'Autenticacao falhou!'
        })
    }
}

module.exports = { 
    authenticate
}