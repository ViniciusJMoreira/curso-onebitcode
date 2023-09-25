async function sum(x,y) {
  if(typeof x === 'number' && typeof y === 'number') {
    return x + y
  } else {
    return Promise.reject(new Error(`Insira corretamente os dados!`))
  }
}

async function execute(x, y) {
  try {
    const result = await sum(x, y)
    console.log(result)
  } catch (error) {
    console.log(error.message)
  }
}

execute(2,2)