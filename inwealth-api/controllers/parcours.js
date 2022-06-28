const db = require('../models')
const Parcours = db.Parcours

exports.save = (req, res) => {
  const parcours = {
    userId: req.params.id,
    typeParcours: req.body.typeParcours,
    etapeParcours: '',
    horizon: req.body.horizon,
    pisteReflexion: req.body.pisteReflexion,
    valeurPisteReflexion: req.body.valeurPisteReflexion,
  }

  if (req.body.etapeParcours) {
    parcours.etapeParcours = req.body.etapeParcours
  } else {
    if (req.body.vendre === true) {
      if (req.body.reqAcquereur === true) {
        if (req.body.accesDocument === true) {
          if (req.body.recuOffreFerme === true) {
            if (req.body.venteSigne === true) {
              parcours.etape = 'Placement'
            } else {
              parcours.etape = 'Négociation'
            }
          } else {
            parcours.etape = 'Audit'
          }
        } else {
          parcours.etape = 'Recherche'
        }
      } else {
        parcours.etape = 'Préparation'
      }
    } else {
      parcours.etape = 'Réflexion'
    }
  }

  Parcours.findOne({
    where: { userId: req.params.id },
  })
    .then((dataParcours) => {
      if (!dataParcours) {
        Parcours.create(parcours)
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
        Parcours.update(parcours, {
          where: { userId: req.params.id },
        })
          .then((num) => {
            if (num == 1) {
              res.send({
                message: 'Parcours was updated successfully.',
              })
            } else {
              res.send({
                message: `Cannot update Parcours with id=${req.params.id}. Maybe Parcours was not found or req.body is empty!`,
              })
            }
          })
          .catch((err) => {
            console.log(err)
            res.status(500).send({
              message: 'Error updating Parcours with id=' + req.params.id,
            })
          })
      }
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({
        message: 'Could not find Parcours with userId=' + id,
      })
    })
}

exports.updateParcours = (req, res) => {
  const id = req.params.id

  Parcours.update(req.body, {
    where: { userId: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Parcours was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Parcours with id=${id}. Maybe Parcours was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({
        message: 'Error updating Parcours with id=' + id,
      })
    })
}

exports.getParcours = (req, res) => {
  const id = req.params.id

  Parcours.findOne({
    where: { userId: id },
  })
    .then((parcours) => {
      console.log(parcours)
      res.status(200).send(parcours)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({
        message: 'Could not find Parcours with userId=' + id,
      })
    })
}

exports.deleteParcours = (req, res) => {
  const id = req.params.id

  Parcours.destroy({
    where: { userId: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'User was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`,
        })
      }
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({
        message: 'Could not delete User with id=' + id,
      })
    })
}

exports.findAll = (req, res) => {
  Parcours.findAll()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving parcours.',
      })
    })
}
