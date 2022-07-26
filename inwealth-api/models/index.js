const { Sequelize } = require('sequelize')
const dbConfig = require('../config')

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
  },
)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.User = require('./User')(sequelize, Sequelize)
db.Finance = require('./Finance')(sequelize, Sequelize)
db.Professionnel = require('./Professionnel')(sequelize, Sequelize)
db.Parcours = require('./Parcours')(sequelize, Sequelize)
db.Piste = require('./Piste')(sequelize, Sequelize)
db.France = require('./France/')(sequelize, Sequelize)
// db.User.hasOne(db.Professionnel, { as: "professionnel" });
// db.User.hasOne(db.Finance, { as: "finance" });
// db.User.hasOne(db.Parcours, { as: "parcours" });

db.Finance.belongsTo(db.User, {
  foreignKey: 'userId',
  as: 'user',
})

db.Professionnel.belongsTo(db.User, {
  foreignKey: 'userId',
  as: 'user',
})

db.Parcours.belongsTo(db.User, {
  foreignKey: 'userId',
  as: 'user',
})

db.Piste.belongsTo(db.User, {
  foreignKey: 'userId',
  as: 'user',
})

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.\n')
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  })

module.exports = db
