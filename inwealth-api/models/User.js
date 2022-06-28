module.exports = (sequelize, Sequelize) => {
  return sequelize.define('user', {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
    },
    residenceFiscale: {
      type: Sequelize.STRING,
    },
    nationalite: {
      //$classUser.residenceFiscale
      type: Sequelize.STRING,
    },
    changementResidence: {
      //$classUser.changementResidenceOui
      type: Sequelize.STRING,
    },
    elementEtranger: {
      //$classUser.elementEtrangerPays
      type: Sequelize.STRING,
    },
    //age
    age: {
      //$classUser.age
      type: Sequelize.INTEGER,
    },
    situationFamille: {
      //$classUser.situationFamille
      type: Sequelize.STRING,
    },
    regimeMatrimonial: {
      //$classUser.regimeMatrimonial
      type: Sequelize.STRING,
    },
    ageConjoint: {
      //$classUser.ageConjoint
      type: Sequelize.INTEGER,
    },
    //Enfant
    enfantMineur: {
      //$classUser.enfantMineur
      type: Sequelize.INTEGER,
    },
    enfantMajeur: {
      //$classUser.enfantMajeur
      type: Sequelize.INTEGER,
    },
    enfantPrecedenteUnion: {
      //$classUser.enfantPrecedenteUnion
      type: Sequelize.BOOLEAN,
    },
    enfantHandicape: {
      //$classUser.enfantHandicape
      type: Sequelize.BOOLEAN,
    },
    petitEnfant: {
      //$classUser.petitEnfant
      type: Sequelize.BOOLEAN,
    },
    nbrePetitEnfant: {
      type: Sequelize.INTEGER,
    },
    locality: {
      type: Sequelize.STRING,
    },
  })
}
