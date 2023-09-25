export class Database {
  static #data = [
  ]

  get getData () {
    return Database.#data
  }

  pushData (transaction) {
    Database.#data.push(transaction)
  }

  findElement(id) {
    return Database.#data.findIndex((t) => t.id === id)
  }

  deleteElement(transactionToRemove) {
    Database.#data.splice(transactionToRemove, 1)
  }

  convertElement(indexToConvert, newTransaction) {
    Database.#data.splice(indexToConvert, 1 , newTransaction )
  }
}