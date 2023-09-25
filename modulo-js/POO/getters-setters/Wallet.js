class Wallet {
  #amount
  #username
  constructor() {
    this.#amount = 100.99 * 100
  }
  get amount() {
    return this.#amount
  }
  set username(newUsername) {
    if(typeof newUsername === 'string') {
      return this.#username = newUsername
    } else {
      console.log(`username must be of type string`)
    }
  }
  get username() {
    return this.#username
  }
}

const myWallet = new Wallet()

console.log(myWallet.amount)
myWallet.username = `Vinicius`
console.log(myWallet.username)
myWallet.username = 123