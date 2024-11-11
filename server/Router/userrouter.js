const router = require('express').Router()

// const postedDatas = require('../Controller/usercontroller')
const {postedDatas,getDatafromDatabase,getsingleData, getsingleDatabyquery, deleteData, updateDatabase} = require('../Controller/usercontroller')
const verifyToken = require('../jwtverify')

router.post('/postdata',postedDatas)
router.get('/getdatas',getDatafromDatabase)
router.get('/singledata/:id',getsingleData)
router.get('/querydata',getsingleDatabyquery)
router.delete('/deletedata',deleteData)
router.put('/updatedata',updateDatabase)

module.exports = router