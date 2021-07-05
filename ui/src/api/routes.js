
// const prefix = process.NODE_ENV === 'dev' ? 'http://localhost:3001/' : '/'
const prefix = 'http://localhost:3001/'

export default {
  inputs: prefix + 'inputs',
  outputs: prefix + 'outputs',
  dailyData: prefix + 'data/daily'
}
