
import { inputs, outputs, dailyData, errorStore } from './index'

import api from '../api'

const errorHandler = (promise) => promise.catch(error => {
  errorStore.set(error)
})

export const fetchInputs = async () => {
  const inputsData = await errorHandler(api.fetchInputs())
  inputs.set(inputsData)
  return inputsData
}

export const postInput = ({ name, amount, recurringType, recurringData }) => {
  return errorHandler(api.postInput({ name, amount, recurringType, recurringData }))
}

export const fetchOutputs = async () => {
  const data = await errorHandler(api.fetchOutputs())
  outputs.set(data)
  return data
}

export const postOutput = ({ name, amount, recurringType, recurringData }) => {
  return errorHandler(api.postOutput({ name, amount, recurringType, recurringData }))
}

export const fetchDailyData = async ({ startAmount, endDate }) => {
  const data = await errorHandler(api.fetchDailyData({ startAmount, endDate }))
  dailyData.set(data)
  return data
}
