export class ValidationEmail {
  constructor(email) {
    this.email = email
    this.error = new Error('Email invalido')

    try {
      this.validation(this.email.value)
      this.email.classList.add('success')
      document.querySelector('#email-err').textContent = ''
    } catch (err) {
      this.email.classList.remove('success')
      this.email.classList.add('error')
      document.querySelector('#email-err').textContent = err.message
    }
  }
  validation(email) {
    if(!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)){
      throw this.error
    }
  }
}