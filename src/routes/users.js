const express = require('express')
const router = express.Router()

const userController = require('../controller/users')


router.post('/create', userController.createNewUser)
router.get('/', userController.getAllUsers)
router.get('/one', userController.getOneUser)
router.delete('/delete/:id', userController.deleteUserById)

module.exports  = router