const { DataTypes } = require('sequelize')
module.exports = (sequelize) => {
  return sequelize.define('frances', {
    // id: {
    //   primaryKey: true,
    //   type: sequelize.UUID,
    //   defaultValue: sequelize.UUIDV1,
    // },
    
    cederEntreprise: {
      type: DataTypes.BOOLEAN,
    },
    transmettreEntreprise: {
      type: DataTypes.BOOLEAN,
    },
    maitriserImpot: {
      type: DataTypes.BOOLEAN,
    },
  })
}
