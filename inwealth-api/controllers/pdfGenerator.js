exports.pdfGenerator = async (req, res) => {
  const id = req.params.userID
  res.render('pdfGenerator', { userID: id })
}
