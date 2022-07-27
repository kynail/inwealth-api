const express = require('express')
const winston = require('winston'),
  expressWinston = require('express-winston')
const db = require('./models')

db.sequelize.sync({ force: false }).then(() => {
  // on creer if don't or exist and replace
  console.log('Drop and re-sync db.')
})

const app = express()

const swaggerUi = require('swagger-ui-express')

const swaggerDocument = require('./swagger_output.json')

app.use(express.json())
app.use(
  expressWinston.logger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json(),
    ),
    meta: false, // optional: control whether you want to log the meta data about the request (default to true)
    msg: 'HTTP {{req.method}} {{req.url}}', // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
    expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
    colorize: true, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
    ignoreRoute: function (req, res) {
      return false
    }, // optional: allows to skip some log messages based on request and/or response
  }),
)
app.use(express.static('static'))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

require('./routes/user')(app)

require('./routes/professionnel')(app)

require('./routes/france')(app)

require('./routes/parcours')(app)

require('./routes/piste')(app)
require('./routes/videos')(app)

module.exports = app
