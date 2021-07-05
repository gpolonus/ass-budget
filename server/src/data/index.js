
const { fetchFutureDailyData } = require('./dailyData')
const { createInput, createOutput, fetchInputs, fetchOutputs } = require('./flows')

module.exports = {
  fetchFutureDailyData,
  createInput,
  createOutput,
  fetchInputs,
  fetchOutputs,
}
