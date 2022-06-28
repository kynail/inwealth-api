module.exports = (sequelize, Sequelize) => {
  return sequelize.define('piste', {
    pisteReflexion: {
      type: Sequelize.TEXT,
    },
  })
}
