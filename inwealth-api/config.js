const path = require('path')
const publicPath = path.join(__dirname, 'static')
module.exports = {
  // HOST: "localhost",
  // USER: "inwealth",
  // PASSWORD: "diris2021",
  // DB: "inwealth",
  HOST: '51.158.107.134',
  USER: 'postgres',
  PASSWORD: 'postgres',
  DB: 'inwealth',
  PORT: 11223,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  primaryColor: '#11004E',
  secondaryColor: '#530039',
  thirdColor: '#B7B2CA',
  highlightColor: '#576656',
  whiteColor: '#FFFFFF',
  publicPath,
  generatedFileName: 'Plan stratégique.pdf',
  // generatedFileName: 'profil.pdf',
}
