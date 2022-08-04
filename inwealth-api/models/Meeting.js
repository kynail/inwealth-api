const { DataTypes } = require('sequelize')
module.exports = (sequelize) => {
  return sequelize.define('france', {
    meeting: {
      type: DataTypes.DATE,
    },
  })
}