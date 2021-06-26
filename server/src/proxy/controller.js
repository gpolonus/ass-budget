
const {
  fetchFutureDailyData,
  createInput,
  createOutput,
  fetchInputs,
  fetchOutputs
} = require('../data')

const postInput = async (req, res) => {
  await createInput(req.query)
  res.status(200)
}

const postOutput = (req, res) => {
  await createOutput(req.query)
  res.status(200)
}

const getInputs = async (req, res) => {
  res.send(await fetchInputs())
}

const getOutputs = async (req, res) => {
  res.send(await fetchOutputs())
}

const getDailyData = async (req, res) => {
  const { endDate } = req.query
  const data = await fetchFutureDailyData(endDate)
  res.send(data)
}

module.exports = {
  getDailyData,
  postInput,
  postOutput,
  getInputs,
  getOutputs
}
