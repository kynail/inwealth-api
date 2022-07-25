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

console.log(db.France)
exports.saveProject = (req, res) => {
  const france = {
    id: req.body.id,
    cederEntreprise: req.body.cederEntreprise,
    transmettreEntreprise: req.body.transmettreEntreprise,
    maitriserImpot: req.body.maitriserImpot,
  }
  France.findOne({
    where: { id: req.params.id },
  })
    .then((dataFrance) => {
      if (!dataFrance) {
        France.create(france)
          .then((data) => {
            res.status(200).send({ data })
          })
          .catch((err) => {
            res.status(500).send({
              message:
                err.message ||
                'Some error occurred while creating the parcours.',
            })
          })
      } else {
        France.update(france, {
          where: { id: req.params.id },
        })
          .then((num) => {
            if (num == 1) {
              res.send({
                message: 'Projects was updated successfully.',
              })
            } else {
              res.send({
                message: `Cannot update Projects with id=${req.params.id}. Maybe Projects was not found or req.body is empty!`,
              })
            }
          })
          .catch((err) => {
            console.log(err)
            res.status(500).send({
              message: 'Error updating Projects with id=' + req.params.id,
            })
          })
      }
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({
        message: 'Could not find Projects with userId=' + id,
      })
    })
}
