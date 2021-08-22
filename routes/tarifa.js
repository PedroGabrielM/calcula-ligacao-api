const express = require('express')
const router = express.Router()

const TarifaController = require('../controllers/TarifaController')

router.get('/', TarifaController.index)
router.post('/show', TarifaController.show)
router.post('/store', TarifaController.store)
router.post('/update', TarifaController.update)
router.post('/delete', TarifaController.destroy)

module.exports = router