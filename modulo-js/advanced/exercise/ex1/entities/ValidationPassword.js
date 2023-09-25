export class ValidationPassword {
  constructor(password) {
    this.password = password
    this.error = new Error('Password invalida')

    try {
      this.validation(this.password.value)
      this.password.classList.add('success')
      document.querySelector('#password-err').textContent = ''
    } catch(err) {
      this.password.classList.remove('success')
      this.password.classList.add('error')
      document.querySelector('#password-err').textContent = err.message
    }
  }
  validation(password) {
    if(
      password.length < 7 ||
      !password.match(/\d/) ||
      !password.match(/[a-z]/) ||
      !password.match(/[A-Z]/) ||
      !password.match(/[^\s\da-zA-Z]/)
    ) {
      throw this.error
    }
  }
}