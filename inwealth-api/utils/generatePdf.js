const PDFMerger = require('pdf-merger-js')
const path = require('path')
const fs = require('fs')
const pdfModelPath = path.resolve('/app/static/pdf/')

const generatePdf = async ({ userID }) => {
  console.log('Generate pdf')
  const merger = new PDFMerger()

  await merger.add(`${pdfModelPath}/full.pdf`, [9, 10, 11, 12])
  try {
    fs.mkdirSync(`${pdfModelPath}/generated/${userID}/`)
  } catch (e) {
    console.error(e)
  } finally {
    await merger.save(
      `${pdfModelPath}/generated/${userID}/Reflexion patrimoniale.pdf`,
    )
  }
}

module.exports = generatePdf
