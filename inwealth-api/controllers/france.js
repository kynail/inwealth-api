const db = require('../models')
const France = db.France

console.log("testestest TESTESTEST " + db.France)

exports.saveProject = (req, res) => {
  const france = {
    userId: req.params.id,
    cederEntreprise: req.body.cederEntreprise,
    transmettreEntreprise: req.body.transmettreEntreprise,
    matriserImpot: req.body.matriserImpot,
  }

  France.findOne({
    where: { userId: req.params.id },
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
                'Some error occurred while creating the france.',
            })
          })
      } else {
        France.update(france, {
          where: { userId: req.params.id },
        })
          .then((num) => {
            if (num == 1) {
              res.send({
                message: 'france was updated successfully.',
              })
            } else {
              res.send({
                message: `Cannot update france with id=${req.params.id}. Maybe france was not found or req.body is empty!`,
              })
            }
          })
          .catch((err) => {
            console.log(err)
            res.status(500).send({
              message: 'Error updating france with id=' + req.params.id,
            })
          })
      }
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({
        message: 'Could not find france with userId=' + id,
      })
    })
}
