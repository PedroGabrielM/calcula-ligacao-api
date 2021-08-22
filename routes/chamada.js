const express = require('express')
const router = express.Router()

const ChamadaController = require('../controllers/ChamadaController')

router.get('/', ChamadaController.index)
router.post('/show', ChamadaController.show)
router.post('/store', ChamadaController.store)
router.post('/update', ChamadaController.update)
router.post('/delete', ChamadaController.destroy)

module.exports = router