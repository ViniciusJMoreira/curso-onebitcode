module.exports = class Player {
  constructor(nome) {
    this.nome = nome
    this.baralho = []
    this.vida = 100
  }

  pushBaralho(baralho) {
    this.baralho.push(baralho)
  }

  get getBaralho() {
    return this.baralho
  }

  gerarPersonagemAleatorio() {
    const i = Math.floor(Math.random()*this.baralho[0].length)
    const baralho =  this.getBaralho[0][i]
    return baralho
  }
}