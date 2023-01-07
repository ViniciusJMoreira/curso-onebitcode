// Metodo every executa uma função para cada elemento do array
// retorna um valor booleano
const age = ["26", "17", "29", "69"]
const resultEvery = age.every(checkAge)
function checkAge(age) {
  return age < 70
}
console.log(resultEvery) // true

// Metodo fill substitui elementos especificos do array atual
// As posições inicial e final devem ser especificados, caso contrario , todos elementos seram substituidos
const arr = ['banana','maça','laranja','melancia']
arr.fill('Kiwy', 2, 3)
console.log(arr) // ['banana','maça','kiwi','melancia']

// Metodo filter cria um novo elemento com todos elementos que foram passaram no teste implementado pela função fornecida
const filter = arr.filter(function(element){
  return element.length > 4
})
console.log(filter) // ['banana','melancia']

// Metodo find retorna o valor do primeiro elemento que passa no teste
// Caso contrario , o valor é undefined
// Não altera o array original
// Não executa funções para elementos vazios
// Retorna uma string e não um array
const find = arr.find(function(element){
  return element.includes('a')
})
console.log(find) // 'banana'

// Metodo findIndex retorna o indice do primeiro valor que passa no teste da função
// Caso contrario o valor é -1
const findIndex = arr.findIndex(element => element.includes('a' && 'ç'))
console.log(findIndex) // 1

// Metodo forEach executa uma função para cada elemento do array
function exibirElementos(element, i) {
  const result = {element, i}
  console.log(result)
}
arr.forEach(exibirElementos)