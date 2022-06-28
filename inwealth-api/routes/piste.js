const express = require('express')
const router = express.Router()
const pisteCtrl = require('../controllers/piste')

module.exports = (app) => {
  router.post('/savePiste/:id', pisteCtrl.savePiste)

  router.get('/getPiste/:id', pisteCtrl.getPiste)

  router.delete('/deletePiste/:id', pisteCtrl.deletePiste)

  app.use('/inwealth/piste', router)
}
