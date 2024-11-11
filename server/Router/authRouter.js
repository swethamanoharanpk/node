const loginData = require('../Controller/authController')

const router = require('express').Router()
router.post('/login',loginData)

module.exports = router
