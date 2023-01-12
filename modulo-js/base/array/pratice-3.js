// Metodo every executa uma função para cada elemento do array
// retorna um valor booleano
const age = ["26", "17", "29", "69"]
const every = age.every(checkAge)
function checkAge(age) {
  return age < 70
}
console.log(every) // true

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

// Metodo isArray retorna um valor booleano se o objeto é ou não um array
const isArray = Array.isArray(arr)
console.log(isArray)


// Metodo map cria um array chamando uma função para cada elemento do array
// Não altera o array original
const persons = [
  {firstname : "Vinicius", lastname: "Moreira"},
  {firstname : "Moritz", lastname: "Moreira"},
  {firstname : "Ericksen", lastname: "Moreira"}
];

const map = persons.map(getFullName);

function getFullName(item) {
  return [item.firstname,item.lastname].join(" ");
}

console.log(map)

// Metodo reduce
const numbers = [1, 2, 3];
const reduce = numbers.reduce(function(valorAcumulado, valorAtual){
  return valorAcumulado + valorAtual
});

console.log(reduce)

const personagens = [
  {nivel: 42 , nome: 'Ira', raca: 'Orc', classe: 'Xamã'},
  {nivel: 28 , nome: 'Garrosh', raca: 'Orc', classe: 'Guerreiro'},
  {nivel: 35 , nome: 'Varok', raca: 'Orc', classe: 'Guerreiro'},
  {nivel: 35 , nome: 'Uther', raca: 'Humano', classe: 'PaladHumano'},
  {nivel: 26 , nome: 'Jaina', raca: 'Humano', classe: 'Maga'},
  {nivel: 39 , nome: 'Tynande', raca: 'Elfo Noturno', classe: 'Sacerdotista'},
  {nivel: 42 , nome: 'Muradin', raca: 'Anão', classe: 'Guerreiro'},
]

const racas = personagens.reduce(function(valorAcumulado,personagem){
  if (valorAcumulado[personagem.classe]){
    valorAcumulado[personagem.classe].push(personagem)
  }else {
    valorAcumulado[personagem.classe] = [personagem]
  }
  return valorAcumulado
}, {})

console.log(racas)