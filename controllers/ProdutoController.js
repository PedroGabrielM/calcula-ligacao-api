const Produto = require('../models/Produto')
const db = require('../app')

const index = (req, res, next) => {
    Produto.find()
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
    let produtoId = req.body.produtoId
    Produto.findById(produtoId)
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

    let produto = new Produto({
        nome: req.body.nome,
        tempo: req.body.tempo
    })
    produto.save()
    .then(response  => {
        res.json({
            message: 'Produto add!'
        })
    })
    .catch(error => {
        res.json({
            message: 'Erro'
        })
    })
}

const update = (req, res, next) => {
    let produtoId = req.body.produtoId

    let updateData = {
        nome: req.body.nome,
        tempo: req.body.tempo
    }

    Produto.findByIdAndUpdate(produtoId, {$set: updateData})
    .then(() => {
        res.json({
            message: 'Produto update'
        })
    })
    .catch(error => {
        res.json({
            message: 'erro'
        })
    })
}

const destroy = (req, res, next)=> {
    let produtoId = req.body.produtoId
    Produto.findByAndRemove(produtoId)
    .then(() => {
        req.json({
            message: 'Produto deleted'
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