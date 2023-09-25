function createBook(nome, pages, author) {
	return {
		nome,
		pages,
		author,
    inStock: 0 ,
    published: false
	}
}

const book = createBook('O sucesso', 240, 'Vinicius')

console.log(book)



function Book(nome, pages, author) {
  this.nome = nome
  this.pages = pages
  this.author = author
  this.inStock = 0
  this.published = false
  this.addStock = function addStock(quantity) {
    this.inStock += quantity
    if (this.inStock >= 1) this.published = true
  }
}

const bookFunctionBuilt = new Book('O sucesso', 240, 'Vinicius')

console.log(bookFunctionBuilt)
bookFunctionBuilt.addStock(0)
console.log(bookFunctionBuilt)