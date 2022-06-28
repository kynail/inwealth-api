const db = require('../models')
const User = db.User
const Professionnel = db.Professionnel

exports.generer = (req, res) => {
  Professionnel.findByFk({
    userId: req.params.id,
    include: [
      {
        model: User,
        where: { id: req.params.id },
      },
    ],
  })
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({
        message: 'Error retrieving User with id=' + req.params.id,
      })
    })
}
