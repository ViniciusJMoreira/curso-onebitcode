let choice = 0

function calculoTriangulo(base, altura) {
  if (base || altura > 0) {
    return (base * altura) / 2
  }else{
    return 'A base ou altura não pode ser zero ou negativo'
  }
}

function calculoRetangulo(base, altura) {
  if (base || altura > 0) {
    return base * altura
  }else{
    return 'A base ou altura não pode ser zero ou negativo'
  }
}

function calculoQuadrado(lado) {
  if (lado > 0) {
    return lado ^ 2
  }else{
    return 'O lado não pode ser zero ou negativo'
  }
}

function calculoTrapezio(baseMaior, baseMenor, altura) {
  if (baseMaior || baseMenor || altura > 0) {
    return (baseMaior + baseMenor) * altura / 2
  }else{
    return 'A base ou altura não pode ser zero ou negativo'
  }
}

function calculoCirculo(raio) {
  if (raio > 0) {
    return 3,14 * (raio ^ 2)
  }else {
    return 'O raio não pode ser zero ou negativo !'
  }
}

do {
  choice = Number(prompt(
    'Bem Vindo ao calculo área\n' +
    '\nEscolha uma opção' +
    '\n[1] Area de um triangulo' + 
    '\n[2] Area de um retangulo' +
    '\n[3] Area de um quadrado' +
    '\n[4] Area de um trapezio' +
    '\n[5] Area de um circulo' +
    '\n[6] Sair'
  ))

  switch (choice) {
    case 1 :
      const baseTriangulo = Number(prompt('Qual é a medida da base ?'))
      const alturaTriangulo = Number(prompt('Qual é a medida da altura ?'))
      alert(calculoTriangulo(baseTriangulo, alturaTriangulo))
      break
    case 2 :
      const baseRetangulo = Number(prompt('Qual é a medida da base ?'))
      const alturaRetangulo = Number(prompt('Qual é a medida da altura ?'))
      alert(calculoRetangulo(baseRetangulo, alturaRetangulo))
      break
    case 3 :
      const lado = Number(prompt('Qual é a medida do lado ?'))
      alert(calculoQuadrado(lado))
      break
    case 4 :
      const baseMaior = Number(prompt('Qual é a medida da primeira base ?'))
      const baseMenor = Number(prompt('Qual é a medida da segunda base ?'))
      const alturaTrapezio = Number(prompt('Qual é a medida da altura ?'))
      alert(calculoTrapezio(baseMaior, baseMenor, alturaTrapezio))
      break
    case 5 :
      const raio = Number(prompt('Qual é o raio do circulo ?'))
      alert(calculoCirculo(raio))
      break
    case 6 :
      alert('Finalizando...')
      break
    default :
      alert('Opção invalida')
  }
} while(choice !== 6)