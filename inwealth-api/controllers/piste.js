const generatePdf = require('../utils/generatePdf')

const db = require('../models')
const Piste = db.Piste

exports.savePiste = (req, res) => {
  const piste = {
    userId: req.params.id,
    pisteReflexion: JSON.stringify(req.body.pisteReflexion),
  }
  console.log(piste.pisteReflexion)
  Piste.findOne({
    where: { userId: req.params.id },
  })
    .then((dataPiste) => {
      if (!dataPiste) {
        Piste.create(piste)
          .then((data) => {
            const dataJson = {}
            dataJson.userId = data.userId
            dataJson.pisteReflexion = JSON.parse(data.pisteReflexion)
            generatePdf({ userID: req.params.id })
            res.status(200).send(dataJson)
          })
          .catch((err) => {
            res.status(500).send({
              message:
                err.message || 'Some error occurred while creating the piste.',
            })
          })
      } else {
        Piste.update(piste, {
          where: { userId: req.params.id },
        })
          .then((num) => {
            if (num == 1) {
              generatePdf({ userID: req.params.id })
              res.send({
                message: 'Piste was updated successfully.',
              })
            } else {
              res.send({
                message: `Cannot update Piste with id=${req.params.id}. Maybe Piste was not found or req.body is empty!`,
              })
            }
          })
          .catch((err) => {
            console.log(err)
            res.status(500).send({
              message: 'Error updating Piste with id=' + req.params.id,
            })
          })
      }
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({
        message: 'Could not find Piste with userId=' + req.params.id,
      })
    })
}

exports.getPiste = (req, res) => {
  Piste.findOne({
    where: { userId: req.params.id },
  })
    .then((data) => {
      const dataJson = {}
      dataJson.userId = data.userId
      dataJson.pisteReflexion = JSON.parse(data.pisteReflexion)
      res.send(dataJson)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({
        message: 'Could not find Piste with userId=' + req.params.id,
      })
    })
}

exports.deletePiste = (req, res) => {
  const id = req.params.id

  Piste.destroy({
    where: { userId: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Piste was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete piste with id=${id}. Maybe Piste was not found!`,
        })
      }
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({
        message: 'Could not delete Piste with id=' + id,
      })
    })
}
