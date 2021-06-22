
const { fetchData, putData } = require('./services/data')
// const { RECURRING_TYPES } = require('./constants');

const fetchOutputs = () => {
  return fetchData('outputs');
}

const putOutput = ({ amount, recurringType, recurringDate }) => {
  // TODO Outputs validation here
  putData('outputs[]', { amount, recurringType, recurringDate });
}

const fetchInputs = () => {
  return fetchData('inputs');
}

const putInput = ({ amount, recurringType, recurringDate }) => {
  // TODO inputs validation here
  putData('inputs[]', { amount, recurringType, recurringDate });
}

module.exports = {
  fetchInputs,
  putInput,
  fetchOutputs,
  putOutput
}
