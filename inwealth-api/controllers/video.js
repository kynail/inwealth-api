const { publicPath } = require('../config')
exports.introduction = (req, res) => {
  //Fred
  const fileName = 'Video-Inwealth-Fred.mp4'
  res.download(`${publicPath}/videos/${fileName}`, fileName)
}

exports.cederEntreprise = (req, res) => {
  //Kevin
  const fileName = 'Video-Inwealth-Kevin.mp4'
  res.download(`${publicPath}/videos/${fileName}`, fileName)
}

exports.assuranceVie = (req, res) => {
  //Seb
  const fileName = 'Video-Inwealth-Seb.mp4'
  res.download(`${publicPath}/videos/${fileName}`, fileName)
}
