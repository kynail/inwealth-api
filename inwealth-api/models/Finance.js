const { DataTypes } = require('sequelize')
module.exports = (sequelize) => {
  return sequelize.define('finance', {
    valorisationSteGroupe: {
      //$classUser.montantTrainVie
      type: DataTypes.INTEGER,
    },
    niveauFortune: {
      //$classUser.niveauFortune
      type: DataTypes.STRING,
    },
    revenuNetHorsImpot: {
      //$classUser.revenuNetHorsImpot
      type: DataTypes.INTEGER,
    },
    chargeDontImpot: {
      //$classUser.chargeDontImpot
      type: DataTypes.INTEGER,
    },
    revenuNetImposable: {
      type: DataTypes.INTEGER,
    },
    montantTrainDeVie: {
      //$classUser.montantTrainVie
      type: DataTypes.INTEGER,
    },
    wishedLifeStyle: {
      type: DataTypes.INTEGER,
    }
  })
}
