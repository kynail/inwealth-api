const express = require('express')
const router = express.Router()
const parcoursCtrl = require('../controllers/parcours')

module.exports = (app) => {
  router.post('/save/:id', parcoursCtrl.save)

  router.get('/getAll', parcoursCtrl.findAll)

  router.get('/getParcours/:id', parcoursCtrl.getParcours)

  router.put('/updateParcours/:id', parcoursCtrl.updateParcours)

  router.delete('/deleteParcours/:id', parcoursCtrl.deleteParcours)

  app.use('/inwealth/parcours', router)
}
