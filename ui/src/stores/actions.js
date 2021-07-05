
import { inputs, outputs, dailyData, errorStore } from './index'

import api from '../api'

const handler = (promise) => {
  return promise
    .then(res => res.data)
    .catch(error => {
      errorStore.set(error)
    })
}

export const fetchInputs = async () => {
  const inputsData = await handler(api.fetchInputs())
  inputs.set(inputsData)
  return inputsData
}

export const postInput = async ({ name, amount, recurringType, recurringData }) => {
  await handler(api.postInput({ name, amount, recurringType, recurringData }))
  await fetchInputs()
}

export const fetchOutputs = async () => {
  const data = await handler(api.fetchOutputs())
  outputs.set(data)
  return data
}

export const postOutput = async ({ name, amount, recurringType, recurringData }) => {
  await handler(api.postOutput({ name, amount, recurringType, recurringData }))
  await fetchOutputs()
}

export const fetchDailyData = async ({ startAmount, endDate }) => {
  const data = await handler(api.fetchDailyData({ startAmount, endDate }))
  dailyData.set(data)
  return data
}
