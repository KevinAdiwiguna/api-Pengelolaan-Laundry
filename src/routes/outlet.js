const express = require('express')
const router = express.Router()

const outletController = require('../controller/outlet')


router.post('/create', outletController.createOneOutlet)
router.get('/', outletController.getAllOutlet)
router.delete('/delete/:id', outletController.deleteOutletById)
router.patch('/update/:id', outletController.updateOutletById)

module.exports  = router