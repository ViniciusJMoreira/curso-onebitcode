function setTime(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, seconds * 1000);
  })
}

const array = [2, 4 , 6 , 8]

async function execute() {  
  console.time('map')
  const square = await Promise.all(array.map(async (x) => {
    await setTime(8)
    return x*x
  }))

  console.log(square)
}

execute()
console.timeEnd('map')