//
let nome = 'prop'

let other = 'other'

let objeto = {}

objeto.prop = 'Ola, mundo'

objeto.other = 'outros'

//
let funcao = 'log'

console[funcao]('Ola, mundo')

//
const pessoa = {}
pessoa.nome = 'Vinicius'
pessoa.idade = 29
pessoa.ginfer = 'Masculino'
pessoa.family = ['Ericksen', 'Moritz', 'Sergio', 'Denise']
pessoa.endereco = {
  rua : 'Guglielmo Marconi',
  numero : '10',
  bairro : 'Verucchio',
  cidade : ['Rimini','Santarcangelo']
}

pessoa.endereco.cidade.push(prompt('Qual e o nome da cidade')) 


let unity = ''
for (let i = 0; i < pessoa.endereco.cidade.length ; i++){
  unity += pessoa.endereco.cidade[i]
}
alert(unity)

