const { DataTypes } = require('sequelize')
module.exports = (sequelize) => {
  return sequelize.define('france', {
    id: {
        primaryKey: true,
        type: sequelize.UUID,
        defaultValue: sequelize.UUIDV1,
      },
      cederEntreprise: {
        type: DataTypes.BOOLEAN,
      },
      transmettreEntreprise: {
        type: DataTypes.BOOLEAN,
      },
      matriserImpot: {
        type: DataTypes.BOOLEAN,
      },
    })
  }