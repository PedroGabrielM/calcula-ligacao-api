const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tarifaSchema = new Schema ({
    origem: {
        type: String
    },
    destino: {
        type: String
    },
    tarifa: {
        type: String
    }
})

const Tarifa = mongoose.model('Tarifa', tarifaSchema)
module.exports = Tarifa