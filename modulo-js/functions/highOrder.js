function calcular(a, b, operacao) {
  console.log('Realizando uma operação')
  const resultado = operacao(a , b)
  return resultado
}

function somar(x, y) {
  console.log('Realizando uma soma')
  return x + y
}

console.log(calcular(5, 5, somar))

function subtrair(x, y) {
  console.log('Realizando uma subtração')
  return x - y
}

console.log(calcular(10 , 5, subtrair))

//
const lista = ['Maça', 'Laranja', 'Pessego']

function exibirElementos(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array
  })
}


for (let i = 0 ; i < lista.length ; i++) {
  exibirElementos(lista[i], i, lista)
}


lista.forEach(function(elemento, indice, array){
  console.log({elemento, indice, array})
})

lista.forEach(exibirElementos)