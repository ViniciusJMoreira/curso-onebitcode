class Book {
  constructor (title) {
    this.title = title
    this.published = false
  }
  Published(){
    this.published = true
  }
}

const Osucesso = new Book('O sucesso')
Osucesso.Published()
console.log(Osucesso)

console.log(Osucesso instanceof Book)