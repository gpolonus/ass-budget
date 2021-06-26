
const { fetchData, putData } = require('./services/data')
// const { RECURRING_TYPES } = require('./constants');

const fetchOutputs = () => {
  return fetchData('outputs');
}

const createOutput = ({ amount, recurringType, recurringData }) => {
  // TODO Outputs validation here
  return putData('outputs[]', { amount, recurringType, recurringData });
}

const fetchInputs = () => {
  return fetchData('inputs');
}

const createInput = ({ amount, recurringType, recurringData }) => {
  // TODO inputs validation here
  putData('inputs[]', { amount, recurringType, recurringData });
}

module.exports = {
  fetchInputs,
  createInput,
  fetchOutputs,
  createOutput
}
