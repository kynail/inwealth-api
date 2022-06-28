const http = require('http')
const app = require('./app')

app.set('port', process.env.PORT || 3000)
app.set('views', './views')

const server = http.createServer(app)
server.listen({ port: process.env.PORT || 3000 }, 0, () => {
  console.log('Server listening on port ' + (process.env.PORT || 3000))
})
