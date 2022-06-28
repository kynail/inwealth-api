const express = require('express')
const router = express.Router()
const videoCtrl = require('../controllers/video')

module.exports = (app) => {
  router.get('/introduction', videoCtrl.introduction)

  router.get('/ceder-entreprise', videoCtrl.cederEntreprise)

  router.get('/assurance-vie', videoCtrl.assuranceVie)

  app.use('/inwealth/videos', router)
}
