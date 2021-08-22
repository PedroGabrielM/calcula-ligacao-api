const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chamadaSchema = new Schema ({
    origem: {
        type: String
    },
    destino: {
        type: String
    },
    tarifa: {
        type: String
    },
    tempo: {
        type: String
    },
    produto: {
        type: String
    },
    preco: {
        type: String
    }
})

const Chamada = mongoose.model('Chamada', chamadaSchema)
module.exports = Chamada