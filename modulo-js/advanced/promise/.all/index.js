function sum(x, y) {
  return new Promise((resolve,reject) => {
    if(typeof x === 'number' && typeof y === 'number') {
      resolve(x + y)
    } else {
      reject(new Error('Dados incorretos'))
    }
  })
}
function sub(x, y) {
  return new Promise((resolve,reject) => {
    if(typeof x === 'number' && typeof y === 'number') {
      resolve(x - y)
    } else {
      reject(new Error('Dados incorretos'))
    }
  })
}

const soma = sum(2,2)
const subtra = sub(4,2)
Promise.all([soma, subtra]).then((results) => console.log(results)).catch((err) => console.log(err.message))

const arr = [2 , 5 , 7 , 9, 4]

function potencia(x) {
  return new Promise((resolve, reject) => {
    if(typeof x === 'number') {
      resolve(x*x)
    } else {
      reject(new Error('Dados incorretos'))
    }
  })
}

Promise.all(arr.map((x)=>potencia(x))).then((results)=>console.log(results)).catch((err)=>console.log(err.message))