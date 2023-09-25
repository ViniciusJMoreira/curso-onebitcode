
setTimeout(() => {
  console.log(`Time out`)
},1000*1)

let seconds = 0

const timeIntervalId = setInterval(() => {
  seconds += 3
  console.log(`passou ${seconds} segundos`)
  if(seconds >= 10) {
    console.log(`programa finalizando`)
    clearInterval(timeIntervalId)
  }
}, 1000*3);

console.log(`teste1`)

console.log(`teste3`)