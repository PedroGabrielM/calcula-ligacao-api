const mongoose = require('mongoose')
const Schema = mongoose.Schema

const produtoSchema = new Schema ({
    nome: {
        type: String
    },
    tempo: {
        type: String
    }
})

const Produto = mongoose.model('Produto', produtoSchema)
module.exports = Produto