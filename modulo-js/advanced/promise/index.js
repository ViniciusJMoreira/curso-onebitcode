const promise = new Promise((resolve, reject) => {
  console.log(`A promise esta sendo resolvida`)
  if(true) {
    reject(true)
  }
  resolve(true)
})

console.log(promise)

setTimeout(() => {
  console.log(promise)
}, 1000*1)