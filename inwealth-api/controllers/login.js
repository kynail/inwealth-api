const db = require('../models')
const Login = db.Login

// console.log("testestest TESTESTEST " + req.body.cederEntreprise)

exports.saveLogin = (req, res) => {
  const login = {
    userId: req.params.id,
    phone: req.body.phone,
    indic: req.body.indic,
    mdp: req.body.mdp,
    iflog: req.body.iflog
  }

  Login.findOne({
    where: { userId: req.params.id },
  })
    .then((dataLogin) => {
      if (!dataLogin) {
        Login.create(login)
          .then((data) => {
            res.status(200).send({ data })
          })
          .catch((err) => {
            res.status(500).send({
              message:
                err.message ||
                'Some error occurred while creating the login.',
            })
          })
      } else {
        Login.update(login, {
          where: { userId: req.params.id },
        })
          .then((num) => {
            if (num == 1) {
              res.send({
                message: 'login was updated successfully.',
              })
            } else {
              res.send({
                message: `Cannot update login with id=${req.params.id}. Maybe login was not found or req.body is empty!`,
              })
            }
          })
          .catch((err) => {
            console.log(err)
            res.status(500).send({
              message: 'Error updating login with id=' + req.params.id,
            })
          })
      }
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({
        message: 'Could not find login with userId=' + req.params.id,
      })
    })
}

exports.getLogin = (req, res) => {
  const id = req.params.id

  Login.findOne({
    where: { userId: id },
  })
    .then((login) => {
      console.log(login)
      res.status(200).send(login)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({
        message: 'Could not find login with userId=' + id,
      })
    })
}