const express = require('express')
const router = express.Router()

const paketController = require('../controller/paket')

router.get('/', paketController.getAllPaket)
router.post('/create', paketController.createOnePaket)
router.patch('/update/:id', paketController.updatePaketById)
router.delete('/delete/:id', paketController.deletePaketById)

module.exports = router