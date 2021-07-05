
const { fetchInputs, fetchOutputs } = require('./flows');
const { RECURRING_TYPES } = require('../constants');
const { loopDates } = require('./utils')

const isFlowOnDate = (flow, date) => {
  const { recurringType, recurringData } = flow
  switch (recurringType) {
    case RECURRING_TYPES.MONTHLY:
      const { day } = recurringData
      return day === date.getDate()
    case RECURRING_TYPES.WEEKLY:
      const { weekday } = recurringData
      return weekday === date.getDay()
  }
}

const getDailyFlowAmount = (inputs, outputs, date) => {
  let flowAmount = 0;

  flowAmount = inputs.reduce((ac, input) => {
    return isFlowOnDate(input, date)
      ? ac + input.amount
      : ac
  }, flowAmount)

  flowAmount = outputs.reduce((ac, output) => {
    return isFlowOnDate(output, date)
      ? ac - output.amount
      : ac
  }, flowAmount)

  return flowAmount
}

const getDailyData = (startAmount, inputs, outputs, startDate, endDate) => {
  return loopDates(startDate, endDate, (date, values) => {
    const dailyFlow = getDailyFlowAmount(inputs, outputs, date)
    const prevValue = values[values.length - 1]
    return prevValue + dailyFlow
  }, [startAmount])
}

const fetchFutureDailyData = async (startAmount, endDate) => {
  const [inputs, outputs] = await Promise.all([fetchInputs(), fetchOutputs()])
  const date = new Date()
  return getDailyData(startAmount, inputs, outputs, date, endDate)
}

module.exports = {
  fetchFutureDailyData,
  getDailyData
}
