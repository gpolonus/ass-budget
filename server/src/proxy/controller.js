
const {
  fetchFutureDailyData,
  createInput,
  createOutput,
  fetchInputs,
  fetchOutputs
} = require('../data')

const postInput = async (req, res) => {
  await createInput(req.body)
  res.status(200).send(true)
}

const postOutput = async (req, res) => {
  await createOutput(req.body)
  res.status(200).send(true)
}

const getInputs = async (req, res) => {
  const thing = await fetchInputs()
  res.send(thing)
}

const getOutputs = async (req, res) => {
  const thing = await fetchOutputs()
  res.send(thing)
}

const getDailyData = async (req, res) => {
  let { startAmount, endDate } = req.query
  startAmount = parseInt(startAmount)
  endDate = new Date(parseInt(endDate))
  const data = await fetchFutureDailyData({ startAmount, endDate })
  res.send(data)
}

module.exports = {
  getDailyData,
  postInput,
  postOutput,
  getInputs,
  getOutputs
}
