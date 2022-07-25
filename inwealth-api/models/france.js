const { DataTypes } = require('sequelize')
module.exports = (sequelize) => {
  return sequelize.define('france', {
    id: {
      //$classParcours.typeParcours
      type: DataTypes.STRING,
    },
    etapeParcours: {
      type: DataTypes.STRING,
    },
    horizon: {
      //$classParcours.horizon
      type: DataTypes.STRING,
    },
    pisteReflexion: {
      type: DataTypes.STRING,
    },
    valeurPisteReflexion: {
      type: DataTypes.BOOLEAN,
    },
  })
}