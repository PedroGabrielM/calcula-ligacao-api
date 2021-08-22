const Chamada = require('../models/Chamada')
const db = require('../app')

const index = (req, res, next) => {
    Chamada.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'Erro'
        })
    })
}  
    
const show = (req, res, next) => {
    let chamadaId = req.body.chamadaId
    Chamada.findById(chamadaId)
    .then(response => {
        res.josn({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'Erro'
        })
    })
}

const store = (req, res, next) => {

    let chamada = new Chamada({
        origem: req.body.origem,
        destino: req.body.destino,
        tarifa: req.body.tarifa,
        tempo: req.body.tempo,
        produto: req.body.produto,
        preco: req.body.preco
    })
    chamada.save()
    .then(response  => {
        res.json({
            message: 'Chamada add!'
        })
    })
    .catch(error => {
        res.json({
            message: 'Erro'
        })
    })
}

const update = (req, res, next) => {
    let chamadaId = req.body.chamadaId

    let updateData = {
        origem: req.body.origem,
        destino: req.body.destino,
        tarifa: req.body.tarifa,
        tempo: req.body.tempo,
        produto: req.body.produto,
        preco: req.body.preco
    }

    Chamada.findByIdAndUpdate(chamadaId, {$set: updateData})
    .then(() => {
        res.json({
            message: 'Chamada update'
        })
    })
    .catch(error => {
        res.json({
            message: 'erro'
        })
    })
}

const destroy = (req, res, next)=> {
    let chamadaId = req.body.chamadaId
    Chamada.findByAndRemove(chamadaId)
    .then(() => {
        req.json({
            message: 'Chamada deleted'
        })
    })
    .catch(error => {
        req.json({
            message: 'Erro'
        })
    })
}

module.exports = {
    index, show, store, update, destroy
}