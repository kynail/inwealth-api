const express = require('express')
const router = express.Router()
const loginCtrl = require('../controllers/login')

module.exports = (app) => {
  router.post('/saveLogin/:id', loginCtrl.saveLogin)

  router.get('/getLogin/:id', loginCtrl.getLogin)

  // router.put('/addProjet/:id', meetingCtrl.updatePat)

  app.use('/inwealth/login', router)
}