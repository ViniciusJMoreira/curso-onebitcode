function atacanteUser() {
  const nomeAtacante = prompt('Informe nome do atacante: ')
  const poderAtaque = Number(prompt('Informe seu poder de ataque: '))
  return {nomeAtacante, poderAtaque}
}

function defensorUser() {
  const nomeDefensor = prompt('Informe nome do defensor: ')
  const poderDefesa = Number(prompt('Informe seu poder de defesa: '))
  const life = Number(prompt('Informe os pontos de vida'))
  const shield = confirm('Possue escudo ?')
  return {nomeDefensor, poderDefesa, life, shield}
}

const atacante = atacanteUser()
const defensor =  defensorUser()
const result = document.getElementById('win')

if (atacante.poderAtaque > defensor.poderDefesa && defensor.shield === false) {
  const dano = atacante.poderAtaque - defensor.poderDefesa
  defensor.life -= dano
  result.textContent = `O dano causado do atacante ${atacante.nomeAtacante} no ${defensor.nomeDefensor}, foi ${dano},
  Vida do defensor : ${defensor.life}`
}