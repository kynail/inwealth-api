const db = require('../models')
const France = db.France

console.log("testestest TESTESTEST " + db.France)
exports.saveProject = (req, res) => {
  const france = {
    id: req.params.id,
    cederEntreprise: req.body.cederEntreprise,
    transmettreEntreprise: req.body.transmettreEntreprise,
    maitriserImpot: req.body.maitriserImpot,
  }
}
