module.exports = class Database {
  #storage = {
    authors: [],
    books: [],
    posters: [],
    orders: [],
    users: []
  }

  find(key) {
    return this.#storage[key]
  }

  saveAuthor(author) {
    this.#storage.authors.push(author)
  }

  findBookByName(bookName) {
    return this.#storage.books.find(b => b.name === bookName)
  }

  saveBooks(book) {
    const bookExists = this.findBookByName(book.name)
    if(!bookExists){
      this.#storage.books.push(book)
    }
  }

  addBooksToStock(bookName, quantity) {
    const book = this.findBookByName(bookName)
    if(book) {
      book.addToStock(quantity)
    }
  }

  removeBookFromStock(bookName, quantity) {
    const book = this.findBookByName(bookName)
    if(book) {
      book.removeToStock(quantity)
    }
  }

  findPosterByName(posterName) {
    return this.#storage.posters.find(p => p.name === posterName)
  }

  savePosters(poster) {
    const posterExists = this.findBookByName(poster.name)
    if(!posterExists){
      this.#storage.posters.push(poster)
    }
  }

  addPostersToStock(posterName, quantity) {
    const poster = this.findPosterByName(posterName)
    if(poster) {
      poster.addToStock(quantity)
    }
  }

  removePosterFromStock(posterName, quantity) {
    const poster = this.findPosterByName(posterName)
    if(poster) {
      poster.addToStock(quantity)
    }
  }

  saveOrder(order) {
    this.#storage.orders.push(order)
  }

  saveUsers(user) {
    const userExists = this.#storage.users.find(u => u.email === user.email)
    if(!userExists){
      this.#storage.users.push(user)
    }
  }

  showStorage() {
    console.table(this.#storage.authors)
    console.table(this.#storage.books)
    console.table(this.#storage.posters)
    console.table(this.#storage.users)
    console.table(this.#storage.orders.map(order => order.data))
  }
}