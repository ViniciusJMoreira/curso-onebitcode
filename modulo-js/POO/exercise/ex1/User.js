class User {
  constructor (fullname, email, password) {
    this.nome = fullname
    this.email = email
    this.password = password
  }
  login(email, password) {
    if(email === this.email && password === this.password) {
      console.log('O login foi bem sucedido')
    }else if (email != this.email && password === this.password) {
      console.log('O email está incorreto')
    }else if (email === this.email && password != this.password) {
      console.log('A senha está incorreta')
    }else {
      console.log('O email e a senha está incorreto')
    }
  }
}

const user1 = new User('Vinicius', 'viniciusit.moreira@gmail.com', '1234')

console.log(user1)

user1.login('viniciusit.moreira@gmail.com', '12354')