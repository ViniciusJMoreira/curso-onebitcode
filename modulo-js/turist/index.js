const nameTurist = prompt('Qual é o nome do turista ?')

let score = 0
let cities = ''

let reply = prompt('Já visitou alguma cidade ? Sim/Não ')

while (reply === 'Sim') {
  let cityVisited = prompt('Qual cidade visitou ?')
  cities += ' - ' + cityVisited + '\n'
  score ++
  reply = prompt('Já visitou alguma outra cidade ? Sim/Não')
}

alert(
  nameTurist +
  '\nQuantidades de cidades visitadas: ' + score +
  '\nCidades visitadas: \n' + cities
)