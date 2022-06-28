// const User = require('../models/User');
const db = require('../models')
// const Parcours = require('../models/Parcours');
const Professionnel = db.Professionnel

exports.situationProfessionnel = (req, res) => {
  const professionnel = {
    valorisationSteGroupe: req.body.valorisationSteGroupe,
    secteurActivite: req.body.secteurActivite,
    detentionImmoExploitation: req.body.detentionImmoExploitation,
    groupe: req.body.groupe,
    formeJuridique: req.body.formeJuridique,
    userId: req.params.id,
  }

  Professionnel.create(professionnel)
    .then((infoPro) => {
      res.status(200).send({ infoPro })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the profession.',
      })
    })
}

exports.findAll = (req, res) => {
  Professionnel.findAll()
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
