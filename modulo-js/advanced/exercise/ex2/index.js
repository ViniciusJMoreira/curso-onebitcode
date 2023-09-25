function calcoloImc(peso, altura) {
  const imc = (peso / (altura * altura))
  if(imc < 18.5) {
    console.log(`O seu imc é ${imc}, Muito Magro`)
  } else if(imc < 24.9) {
    console.log(`O seu imc é ${imc}, Normal`)
  } else if (imc < 29.9) {
    console.log(`O seu imc é ${imc}, sobrepeso`)
  } else {
    console.log(`O seu imc é ${imc}, obesidade grave`)
  }
}

function assincrona (peso, altura) {
  return new Promise((resolve, reject) => {
    if(typeof peso === 'number' && typeof altura === 'number') {
      const imc = calcoloImc(peso, altura)
      resolve(imc)
    } else {
      const error = new Error(`Dados incorretos, inserir corretamente`)
      reject(error)
    }
  })
}

assincrona(80, 1.88).then((imc) => console.log(imc)).catch((error) => console.log(error.message))