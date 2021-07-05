
const express = require('express')
const cors = require('cors')

const { initRoutes } = require('./routes')

const initServer = () => {
  const app = express()

  app.use(cors())

  initRoutes(app)

  console.log('Listening on a port')
  app.listen(3001)
}

module.exports = {
  initServer
}
