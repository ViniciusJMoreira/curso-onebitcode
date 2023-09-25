export class Database {
  static #data = []

  get getData () {
    return Database.#data
  }

  set pushData (transaction) {
    Database.#data.push(transaction)
  }

  set 
}