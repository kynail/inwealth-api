const { DataTypes } = require('sequelize')
module.exports = (sequelize) => {
  return sequelize.define('login', {
    login: {
      type: DataTypes.DATE,
    },
  })
}