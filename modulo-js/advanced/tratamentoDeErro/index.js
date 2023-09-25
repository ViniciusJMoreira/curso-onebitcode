function sum(a, b) {
  const n1 = Number(a)
  const n2 = Number(b)

  if(isNaN(n1) || isNaN(n2)) {
    throw new Error('o valor é invalido')
  } else {
    return n1 + n2
  }
}

try {
  console.log(sum(5, 5))
  console.log(sum(5, null))
  console.log(sum(5, undefined))
} catch(error) {
  console.log('o valor não é um numero')
  console.log(error)
  console.log(error.message)
} finally {
  console.log('Finalizando')
}