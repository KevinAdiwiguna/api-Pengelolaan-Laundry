const express = require('express')
const router = express.Router()

const userController = require('../controller/users')


router.post('/login', userController.loginUsers)
router.post('/register', userController.registerUsers)
router.delete('/delete/:id', userController.deleteUsers)
router.get('/', userController.getAllUser)

module.exports  = router