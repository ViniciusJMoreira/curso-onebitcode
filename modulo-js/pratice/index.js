const Player = require("./Player")

const personagens = [
  {nome: 'Ira', raca: 'Orc', classe: 'Xamã', attack: '7', defesa: '4'},
  {nome: 'Garrosh', raca: 'Orc', classe: 'Guerreiro', attack: '9', defesa: '5'},
  {nome: 'Varok', raca: 'Orc', classe: 'Guerreiro', attack: '8', defesa: '4'},
  {nome: 'Uther', raca: 'Humano', classe: 'PaladHumano', attack: '4', defesa: '6'},
  {nome: 'Jaina', raca: 'Humano', classe: 'Maga', attack: '6', defesa: '8'},
  {nome: 'Tynande', raca: 'Elfo Noturno', classe: 'Sacerdotista', attack: '6', defesa: '7'},
  {nome: 'Muradin', raca: 'Anão', classe: 'Guerreiro', attack: '8', defesa: '4'},
]

function gerarBaralhoAleatorio() {
  let baralho = []
  while(baralho.length <= 4) {
    const i = Math.floor(Math.random()*personagens.length)
    const personagem = personagens[i]
    baralho.push(personagem)
  }
  return baralho
}

function fight() {
  const playerOne = new Player('Vinicius')
  const playerTwo = new Player('Carlos')

  playerOne.pushBaralho(gerarBaralhoAleatorio())
  playerTwo.pushBaralho(gerarBaralhoAleatorio())
  const personagemPlayerOne = playerOne.gerarPersonagemAleatorio()
  console.log(personagemPlayerOne)
  const personagemPlayerTwo = playerTwo.gerarPersonagemAleatorio()
  console.log(personagemPlayerTwo)
  if(personagemPlayerOne.attack > personagemPlayerTwo.attack) {
    console.log(`O personagem ${personagemPlayerOne.nome} ganhou contra o adversario ${personagemPlayerTwo.nome} .`)
  } else if(personagemPlayerOne.attack === personagemPlayerTwo.attack){
    console.log(`Empate`)
  } else {
    console.log(`O personagem ${personagemPlayerTwo.nome} ganhou contra o adversario ${personagemPlayerOne.nome} .`)
  }
}

fight()