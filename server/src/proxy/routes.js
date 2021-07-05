
const controller = require('./controller')

const initRoutes = (app) => {
  app.get('/inputs', controller.getInputs)

  // app.put('/inputs')

  app.post('/inputs', controller.postInput)

  app.get('/outputs', controller.getOutputs)

  // app.put('/outputs')

  app.post('/outputs', controller.postOutput)

  app.get('/data/daily', controller.getDailyData)
}

module.exports = {
  initRoutes
}
