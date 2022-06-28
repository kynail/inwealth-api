const { DataTypes } = require('sequelize')
module.exports = (sequelize) => {
  return sequelize.define('professionnel', {
    pourcentageDetention: {
      type: DataTypes.FLOAT,
    },
    secteurActivite: {
      type: DataTypes.STRING,
    },
    immobilierExploitation: {
      type: DataTypes.STRING,
    },
    groupe: {
      type: DataTypes.BOOLEAN,
    },
    formeJuridique: {
      type: DataTypes.STRING,
    },
  })
}
