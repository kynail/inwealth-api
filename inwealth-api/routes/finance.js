const express = require('express')
const router = express.Router()
const financeCtrl = require('../controllers/finance')

module.exports = (app) => {
  router.post('/saveInfoFin/:id', financeCtrl.situationFinanciere)

  router.get('/getAll', financeCtrl.findAll)

  app.use('/inwealth/finance', router)
}
