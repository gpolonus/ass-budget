
import axios from 'axios'

import routes from './routes'

export default {
  fetchInputs: () => axios.get(routes.inputs),

  postInput: (data) => axios.post(routes.inputs, data),

  fetchOutputs: () => axios.get(routes.outputs),

  postOutput: (data) => axios.post(routes.outputs, data),

  fetchDailyData: ({ startAmount, endDate }) => axios.get(`${routes.dailyData}?startAmount=${startAmount}&endDate=${endDate}`, )
}
