
const { fetchFutureDailyData } = require('./dailydata')
const { createInput, createOutput, fetchInputs, fetchOutputs } = require('./flows')

module.exports = {
  fetchFutureDailyData,
  createInput,
  createOutput,
  fetchInputs,
  fetchOutputs,
}
