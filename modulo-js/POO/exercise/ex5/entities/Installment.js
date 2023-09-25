module.exports = class Installment {
  constructor(value, number) {
    this.value = parseInt(value)
    this.number = number
    this.status = 'pending'
  }
}