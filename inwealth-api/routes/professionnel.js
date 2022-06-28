const express = require('express')
const router = express.Router()
const proCtrl = require('../controllers/professionnel')

module.exports = (app) => {
  router.post('/saveInfoPro/:id', proCtrl.situationProfessionnel)

  router.get('/getAll', proCtrl.findAll)

  app.use('/inwealth/pro', router)
}
