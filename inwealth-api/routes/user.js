const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/user')

module.exports = (app) => {
  router.post('/saveProfil', userCtrl.profilUser)

  router.post('/saveInfoPat', userCtrl.situationPatrimoniale)

  router.get('/getInfoProfil/:id', userCtrl.infoProfil)

  router.get('/getInfoUser/:id', userCtrl.getInfoUser)

  router.get('/getAllInfoUser/:id', userCtrl.getAllInfoUser)

  router.get('/getChiffre/:id', userCtrl.getChiffre)

  router.get('/listePiste/:id', userCtrl.listePiste)

  router.get('/piste/:id', userCtrl.pisteReflexion)

  router.put('/elementEtranger/:id', userCtrl.updatePat)

  router.put('/updateProfil/:id', userCtrl.updateProfilUser)

  router.put('/update/:id', userCtrl.update)

  router.get('/getSituation', userCtrl.findAll)

  router.get('/getReflexPatFile/:id',userCtrl.getReflexPatFile)

  app.use('/inwealth/user', router)
}
