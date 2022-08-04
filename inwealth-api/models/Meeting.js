const { DataTypes } = require('sequelize')
module.exports = (sequelize) => {
  return sequelize.define('meeting', {
    meeting: {
      type: DataTypes.DATE,
    },
  })
}