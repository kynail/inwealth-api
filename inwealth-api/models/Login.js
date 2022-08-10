const { DataTypes } = require('sequelize')
module.exports = (sequelize) => {
  return sequelize.define('login', {
    phone: {
      type: DataTypes.STRING,
    },
    indic: {
      type: DataTypes.STRING,
    },
    mdp: {
      type: DataTypes.STRING,
    },
    iflog: {
      type: DataTypes.BOOLEAN,
    }
  })
}
