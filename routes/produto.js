const express = require('express')
const router = express.Router()

const ProdutoController = require('../controllers/ProdutoController')
const authenticate = require('../middleware/authenticate')

router.get('/', ProdutoController.index)
router.post('/show', ProdutoController.show)
router.post('/store', ProdutoController.store)
router.post('/update', ProdutoController.update)
router.post('/delete', ProdutoController.destroy)

module.exports = router