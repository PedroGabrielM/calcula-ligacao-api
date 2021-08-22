const Tarifa = require('../models/Tarifa')
const db = require('../app')

const index = (req, res, next) => {
    Tarifa.find()
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
    let tarifaId = req.body.tarifaId
    Tarifa.findById(tarifaId)
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

    let tarifa = new Tarifa({
        origem: req.body.origem,
        destino: req.body.destino,
        tarifa: req.body.tarifa
    })
    tarifa.save()
    .then(response  => {
        res.json({
            message: 'Tarifa add!'
        })
    })
    .catch(error => {
        res.json({
            message: 'Erro'
        })
    })
}

const update = (req, res, next) => {
    let tarifaId = req.body.tarifaId

    let updateData = {
        origem: req.body.origem,
        destino: req.body.destino,
        tarifa: req.body.tarifa
    }

    Tarifa.findByIdAndUpdate(tarifaId, {$set: updateData})
    .then(() => {
        res.json({
            message: 'Tarifa update'
        })
    })
    .catch(error => {
        res.json({
            message: 'erro'
        })
    })
}

const destroy = (req, res, next)=> {
    let tarifaId = req.body.tarifaId
    Tarifa.findByAndRemove(tarifaId)
    .then(() => {
        req.json({
            message: 'Tarifa deleted'
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