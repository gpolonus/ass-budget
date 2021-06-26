
const controller = require('./controller')

const initRoutes = (app) => {
  app.get('/inputs', )

  // app.put('/inputs')

  app.post('/inputs', async (req, res) => {
    await controller.createInput(req.query)
    res.status(200)
  })

  app.get('/outputs', async (req, res) => {
    res.send(await controller.fetchOutputs())
  })

  // app.put('/outputs')

  app.post('/outputs', async (req, res) => {
    await controller.createOutput(req.query)
    res.status(200)
  })

  app.get('/data/dailydata', async (res, req) => {
    const { endDate } = req.query
    const data = await controller.getDailyData(endDate)
    res.send(data)
  })
}

module.exports = {
  initRoutes
}
