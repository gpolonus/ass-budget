
const loopDates = (startDate, endDate, fn) => {
  const values = []
  for (let d = new Date(startDate), i = 0; d <= endDate; d.setDate(d.getDate() + 1), i++) {
    values.push(fn(d, values, i))
  }
  return values
}

module.exports = {
  loopDates
}
