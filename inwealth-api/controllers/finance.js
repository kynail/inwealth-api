// const User = require('../models/User');
const db = require('../models')
// const Parcours = require('../models/Parcours');
const Finance = db.Finance

exports.situationFinanciere = (req, res) => {
  const finance = {
    montantTrainDeVie: req.body.montantTrainDeVie,
    wishedLifeStyle: req.body.wishedLifeStyle,
    revenuNetHorsImpot: req.body.revenuNetHorsImpot,
    chargeDontImpot: req.body.chargeDontImpot,
    userId: req.params.id,
  }

  Finance.create(finance)
    .then((infoFin) => {
      res.status(200).send({ infoFin })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the profession.',
      })
    })
}

exports.findAll = (req, res) => {
  Finance.findAll()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving profession.',
      })
    })
}
