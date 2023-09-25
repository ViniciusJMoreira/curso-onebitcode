class Address {
  constructor (rua, numero, bairro) {
    this.rua = rua
    this.numero = numero
    this.bairro = bairro
  }
  fullAddress() {
    return `Rua: ${this.rua} , ${this.numero} , Bairro: ${this.bairro}.`
  }
}
module.exports = Address