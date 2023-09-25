export class ValidationFullName {
  constructor(fullname) {
    this.fullname = fullname
    this.error = new Error('Insira corretamente o nome completo')

    try {
      this.validation(this.fullname.value)
      this.fullname.classList.add('success')
      document.querySelector('#fullname-err').textContent = ''
    } catch(err) {
      this.fullname.classList.remove('success')
      this.fullname.classList.add('error')
      document.querySelector('#fullname-err').textContent = err.message
    }

  }
  validation(fullname) {
    if(fullname.length < 4) {
      throw this.error
    }
  }
}