const express = require('express')
const router = express.Router()
const franceCtrl = require('../controllers/france')

module.exports = (app) => {
  router.post('/saveProject/:id', franceCtrl.saveProject)

  router.get('/getInfoProjet/:id', franceCtrl.infoProject)

  // router.put('/addProjet/:id', franceCtrl.updatePat)

  app.use('/inwealth/france', router)
}