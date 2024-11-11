const router = require('express').Router()

const {insertData, demoData, demoEyeColor, demoAge, demoUpdate, demoDelete}= require('../Controller/demoController')



router.post('/insert',insertData)
router.get('/demo',demoData)
router.get('/demoone',demoEyeColor)
router.get('/demotwo',demoAge)
router.get('/demoup',demoUpdate)
router.get('/delete',demoDelete)

module.exports = router