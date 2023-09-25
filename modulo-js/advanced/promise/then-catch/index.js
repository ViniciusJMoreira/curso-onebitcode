function example() {
  return new Promise((resolve, reject) => {
    let number = 0
    if(number > 1) {
      resolve(number)
    } else {
      reject(new Error(`O Numero é menor que 1`))
    }
  })
}

example().then((value) => console.log(value)).catch((err) => console.log(err.message))

console.log(`qualquer coisa`)