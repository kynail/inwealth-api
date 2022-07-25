const { DataTypes } = require('sequelize')
module.exports = (sequelize) => {
  return sequelize.define('parcours', {
    id: {
      primaryKey: true,
      type: sequelize.UUID,
      defaultValue: sequelize.UUIDV1,
    },
    cederEntreprise: {
      type: DataTypes.BOOLEAN,
    },
    transmettreEntreprise: {
      //$classParcours.horizon
      type: DataTypes.BOOLEAN,
    },
    matriserImpot: {
      type: DataTypes.BOOLEAN,
    },
  })
}
