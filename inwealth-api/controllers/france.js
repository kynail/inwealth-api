const { generatedFileName } = require('../config')

const createDynamicPdf = require('../utils/createDynamicPdf')

const db = require('../models')
const fs = require('fs')
const { publicPath } = require('../config')
const { pisteSansConditions } = require('../pistes/pisteSansCondition')
const { pisteDonation } = require('../pistes/pisteDonation')
const { pisteHolding } = require('../pistes/pisteHolding')
const { pisteHorizon } = require('../pistes/pisteHorizon')
const { pisteImmoEntreprise } = require('../pistes/pisteImmoEntreprise')
const { pistePetitsEnfants } = require('../pistes/pistePetitsEnfants')
const { pisteRegimeMat } = require('../pistes/pisteRegimeMat')
const { pisteSituation } = require('../pistes/pisteSituation')
const { pisteAssVie } = require('../pistes/pisteAssVie')
const User = db.User
const Finance = db.Finance
const Professionnel = db.Professionnel
const Parcours = db.Parcours
const Piste = db.Piste
const France = db.France

exports.saveProject = (req, res) => {
  const projet = {
    id: req.body.id,
    cederEntreprise: req.body.cederEntreprise,
    transmettreEntreprise: req.body.transmettreEntreprise,
    maitriserImpot: req.body.maitriserImpot,
  }
  France.create(projet)
    .then(() => {
      res.status(200).send(dataUser)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the data pro.',
      })
    })
}
