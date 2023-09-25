export class Transaction {
  constructor(name, amount) {
    this.name = name
    this.amount = amount
    this.id = Transaction.anonymousId()
  }
  static anonymousId() {
    return Math.floor(Math.random() * 100)
  }
}