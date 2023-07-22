const avarage = (...entries) => {
  const sum = entries.reduce((numAcc, num) => numAcc + num , 0)
  return sum / entries.length
}

const weightAvarage = (...entries) => {
  const sum = entries.reduce((numAcc, {numbers, weight}) =>
    numAcc + (numbers * weight), 0 )
  const weightSum = entries.reduce((numAcc, entry) => numAcc + entry.weight, 0)
  return sum / weightSum
}