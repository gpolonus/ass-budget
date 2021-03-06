
const { fetchData, putData } = require('./services/data')
// const { RECURRING_TYPES } = require('./constants');

const fetchOutputs = () => {
  return fetchData('outputs').then(data => data || []);
}

const createOutput = ({ name, amount, recurringType, recurringData }) => {
  // TODO Outputs validation here
  return putData('outputs[]', { name, amount, recurringType, recurringData });
}

const fetchInputs = () => {
  return fetchData('inputs').then(data => data || []);
}

const createInput = ({ name, amount, recurringType, recurringData }) => {
  // TODO inputs validation here
  return putData('inputs[]', { name, amount, recurringType, recurringData });
}

module.exports = {
  fetchInputs,
  createInput,
  fetchOutputs,
  createOutput
}
