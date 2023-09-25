class User {
  #password
  constructor(user, password) {
    this.user = user
    this.#password = password
  }
  showPassword() {
    console.log(this.#password)
  }
  showAccount() {
    console.log(this)
  }
}

module.exports = User