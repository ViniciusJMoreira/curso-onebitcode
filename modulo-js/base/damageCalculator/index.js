const character1 = prompt('Nome do primeiro personagem:')
const attack = Number(prompt('Poder de ataque:'))
const character2 = prompt('Nome do segundo personagem:')
let life = Number(prompt('Quantidade de vida:'))
const defence = Number(prompt('Quantidade de defesa:'))
const shield = confirm('O personagem possui escudo ?')

let dano

if (attack > defence && shield === false) {
  dano = attack - defence
  life -= dano
} else if (attack > defence && shield === true) {
  dano = (attack - defence) /2
  life -= dano 
} else {
  dano = 0
}
alert(
  character1  +
  "\nSkills" +
  "\nAttack : " + attack +
  "\n" +
  character2 +
  "\nSkills" +
  "\nLife : " + life +
  "\nDefence : " + defence +
  "\n" +
  "Dano causado : " + dano + " pontos"
)  