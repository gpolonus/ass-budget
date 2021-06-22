
const { fetchInputs, fetchOutputs } = require('flows');

const getDailyData = (inputs, outputs, startDate, endDate) => {

  return []
}

const fetchDailyData = async (endDate) => {
  const [inputs, outputs] = await Promise.all([fetchInputs(), fetchOutputs()])
  const date = new Date()
  return getDailyData(inputs, outputs, date, endDate)
}

module.exports = {
  fetchDailyData,
  getDailyData
}
