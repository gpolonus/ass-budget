
const {
  fetchDailyData,
  createInput,
  createOutput,
  fetchInputs,
  fetchOutputs
} = require('../data')

const postInput = ({ amount, recurringType, recurringData }) => {
  return createInput({ amount, recurringType, recurringData })
}

const postOutput = ({ amount, recurringType, recurringData }) => {
  return createOutput({ amount, recurringType, recurringData })
}

const getInputs = async (req, res) => {
  res.send(await controller.fetchInputs())
}

const getOutputs = () => {
  return fetchOutputs()
}

const getDailyData = (endDate) => {
  return fetchDailyData(endDate)
}

module.exports = {
  getDailyData,
  postInput,
  postOutput,
  getInputs,
  getOutputs
}
