const productInfo = require('../Controller/productcontroller')
const router = require('express').Router()

router.post('/postproductDetails',productInfo)
module.exports = router