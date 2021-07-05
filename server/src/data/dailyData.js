
const { fetchInputs, fetchOutputs } = require('./flows');
const { RECURRING_TYPES } = require('../constants');
const { loopDates } = require('./utils')

const isFlowOnDate = (flow, date) => {
  const { recurringType, recurringData } = flow

  switch (recurringType) {
    case RECURRING_TYPES.MONTHLY:
      const day = recurringData
      return day === date.getDate()
    case RECURRING_TYPES.WEEKLY:
      const weekday = recurringData
      return weekday === date.getDay()
  }
}

const getDailyFlowAmount = (inputs, outputs, date) => {
  let flowAmount = 0;
  const occuringInputs = []
  flowAmount = inputs.reduce((ac, input) => {
    if(!isFlowOnDate(input, date)) return ac;

    occuringInputs.push(input)
    return ac + input.amount
  }, flowAmount)

  const occuringOutputs = []
  flowAmount = outputs.reduce((ac, output) => {
    if(!isFlowOnDate(output, date)) return ac;

    occuringOutputs.push(output)
    return ac + output.amount
  }, flowAmount)

  return { flowAmount, occuringInputs, occuringOutputs }
}

const getDailyData = (startAmount, inputs, outputs, startDate, endDate) => {
  return loopDates(startDate, endDate, (date, values) => {
    const {
      flowAmount: dailyFlow,
      occuringInputs,
      occuringOutputs
    } = getDailyFlowAmount(inputs, outputs, date)

    const { value: prevValue } = values.length ? values[values.length - 1] : { value: startAmount }

    return {
      date: date.getTime(),
      value: prevValue + dailyFlow,
      occuringInputs,
      occuringOutputs
    }
  })
}

const fetchFutureDailyData = async ({ startAmount, endDate }) => {
  const [inputs, outputs] = await Promise.all([fetchInputs(), fetchOutputs()])
  const date = new Date()
  return getDailyData(startAmount, inputs, outputs, date, endDate)
}

module.exports = {
  fetchFutureDailyData,
  getDailyData
}
