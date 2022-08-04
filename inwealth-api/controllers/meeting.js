const db = require('../models')
const Meeting = db.Meeting

// console.log("testestest TESTESTEST " + req.body.cederEntreprise)

exports.saveMeeting = (req, res) => {
  const meeting = {
    userId: req.params.id,
    meeting: req.body.meeting,
  }

  Meeting.findOne({
    where: { userId: req.params.id },
  })
    .then((dataMeeting) => {
      if (!dataMeeting) {
        Meeting.create(meeting)
          .then((data) => {
            res.status(200).send({ data })
          })
          .catch((err) => {
            res.status(500).send({
              message:
                err.message ||
                'Some error occurred while creating the meeting.',
            })
          })
      } else {
        Meeting.update(meeting, {
          where: { userId: req.params.id },
        })
          .then((num) => {
            if (num == 1) {
              res.send({
                message: 'meeting was updated successfully.',
              })
            } else {
              res.send({
                message: `Cannot update meeting with id=${req.params.id}. Maybe meeting was not found or req.body is empty!`,
              })
            }
          })
          .catch((err) => {
            console.log(err)
            res.status(500).send({
              message: 'Error updating meeting with id=' + req.params.id,
            })
          })
      }
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({
        message: 'Could not find meeting with userId=' + req.params.id,
      })
    })
}

exports.getMeeting = (req, res) => {
  const id = req.params.id

  Meeting.findOne({
    where: { userId: id },
  })
    .then((meeting) => {
      console.log(meeting)
      res.status(200).send(meeting)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({
        message: 'Could not find meeting with userId=' + id,
      })
    })
}