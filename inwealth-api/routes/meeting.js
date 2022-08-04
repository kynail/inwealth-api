const express = require('express')
const router = express.Router()
const meetingCtrl = require('../controllers/meeting')

module.exports = (app) => {
  router.post('/saveMeeting/:id', meetingCtrl.saveMeeting)

  router.get('/getMeeting/:id', meetingCtrl.getMeeting)

  // router.put('/addProjet/:id', meetingCtrl.updatePat)

  app.use('/inwealth/meeting', router)
}