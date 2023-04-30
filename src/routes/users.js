const express = require('express')
const router = express.Router()

const userController = require('../controller/users')
const authorization = require("../middleware/authorization")
const refreshToken = require('../controller/RefreshToken')

router.post('/login', userController.loginUsers)
router.delete('/logout', userController.logoutUsers)
router.get('/token', refreshToken)
router.post('/register', userController.registerUsers)
router.delete('/delete/:id', authorization, userController.deleteUsers)
router.get('/', authorization, userController.getAllUser)

module.exports = router 