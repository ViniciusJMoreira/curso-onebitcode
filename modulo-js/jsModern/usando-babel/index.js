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

const median = (...numbers) => {
  const orderedNumbers = [...numbers].sort(a , b => a - b )
  const middle = Math.floor(orderedNumbers.length / 2)
  if (orderedNumbers.length % 2 !== 0){
    return orderedNumbers[numbers]
  }
  const firstMiddle = orderedNumbers[middle -1]
  const secondMiddle = orderedNumbers[middle]
  return avarage(firstMiddle, secondMiddle)
}

const mode = (...numbers) => {
  const quantities = numbers.map(num => [num, numbers.filter(n => num === n).length])
  quantities.sort(a, b => b[1] - a[1])
  return quantities[0][0]
}