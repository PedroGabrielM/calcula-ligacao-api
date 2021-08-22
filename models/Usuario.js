const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usuarioSchema = new Schema ({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    password: {
        type: String
    }
}, {timestamps: true})

const Usuario = mongoose.model('Usuario', usuarioSchema)
module.exports = Usuario