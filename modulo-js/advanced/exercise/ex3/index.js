async function calcoloImc(peso, altura) {
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

async function assincrona (peso, altura) {
  if(typeof peso === 'number' && typeof altura === 'number') {
    const imc = await calcoloImc(peso, altura)
    return imc
  } else {
    const error = new Error(`Dados incorretos, inserir corretamente`)
    return Promise.reject(error)
  }
}

async function execute() {
  const result = await assincrona(80, 1.88)
  console.log(result)
}

execute()