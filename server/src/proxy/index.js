
const express = require('express')

const { initRoutes } = require('./routes')

const initServer = () => {
  const app = express()

  initRoutes(app)
}

module.export = {
  initServer
}
