const personagens = [
  {nivel: 42 , nome: 'Ira', raca: 'Orc', classe: 'Xamã'},
  {nivel: 28 , nome: 'Garrosh', raca: 'Orc', classe: 'Guerreiro'},
  {nivel: 35 , nome: 'Varok', raca: 'Orc', classe: 'Guerreiro'},
  {nivel: 35 , nome: 'Uther', raca: 'Humano', classe: 'PaladHumano'},
  {nivel: 26 , nome: 'Jaina', raca: 'Humano', classe: 'Maga'},
  {nivel: 39 , nome: 'Tynande', raca: 'Elfo Noturno', classe: 'Sacerdotista'},
  {nivel: 42 , nome: 'Muradin', raca: 'Anão', classe: 'Guerreiro'},
]

// map : serve para fazer transformação em arrays, ou seja, podemos pegar um array existente e conseguirmos criar um novo array sem fazer nenhuma modificação.

// mapeamento sem a utilização do map

const nomes = []

for (let i = 0 ; i < personagens.length ; i++) {
  nomes.push(personagens[i].nome)
}

console.log(nomes)

// utilizando map

const nomesMap = personagens.map(function(personagem){
  return personagem.nome
})

console.log(nomesMap)

// filter : serve para filtrar um elemento array existente, também cria um novo array com esses elementos

// sem o filter

const orcs = []

for (let i = 0 ; i < personagens.length ; i++) {
  if (personagens[i].raca === 'Orc') {
    orcs.push(personagens[i])
  }
}

console.log(orcs)

// Utilizando o filter

const orcsFilter = personagens.filter(function(personagem){
  return personagem.raca === 'Orc'
})

console.log(orcsFilter)

// reduce : serve para transformar um array em algum outro valor, e reorganizar os dados

const nivelTotal = personagens.reduce(function(valorAcumulado, personagem){
  return valorAcumulado + personagem.nivel
},0)

console.log(nivelTotal)

// reorganizando os personagems por raça

const racas = personagens.reduce(function (valorAcumulado, personagem){
  if (valorAcumulado[personagem.raca]) {
    valorAcumulado[personagem.raca].push(personagem)
  }else {
    valorAcumulado[personagem.raca] = [personagem]
  }
  return valorAcumulado
},{})

console.log(racas)