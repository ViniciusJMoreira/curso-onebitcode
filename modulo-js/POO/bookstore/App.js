const Database = require("./Database")
const Author = require("./entities/Author")
const Book = require("./entities/Book")
const Order = require("./entities/Order")
const Poster = require("./entities/Posters")
const User = require("./entities/User")

module.exports = class App {
  static #database = new Database()

  createUser(name, email, password) {
    const user = new User(name, email, password)
    App.#database.saveUsers(user)
  }

  getUsers() {
    return App.#database.find('users')
  }

  createAuthor(name, nationality, bio) {
    const author = new Author(name, nationality, bio)
    App.#database.saveAuthor(author)
  }

  getAuthors() {
    return App.#database.find('authors')
  }

  createBook(title, synopsis, genre, author, description, pages, price, inStock) {
    const book = new Book(title, synopsis, genre, author, description, pages, price, inStock)
    App.#database.saveBooks(book)
  }

  addBook(bookName, quantity) {
    App.#database.addBooksToStock(bookName, quantity)
  }

  getBooks() {
    return App.#database.find('books')
  }

  createPoster(name, description, height, width, price, inStock) {
    const poster = new Poster(name, description, height, width, price, inStock)
    App.#database.savePosters(poster)
  }

  addPoster(posterName, quantity) {
    App.#database.addPostersToStock(posterName, quantity)
  }

  getPosters() {
    return App.#database.find('posters')
  }

  createOrder(items, user) {
    const order = new Order(items, user)
    App.#database.saveOrder(order)
    order.data.items.forEach( ({product, quantity}) => {
      if(product instanceof Book) {
        App.#database.removeBookFromStock(product.name, quantity)
      } else if (product instanceof Poster) {
        App.#database.removePosterFromStock(product.name, quantity)
      }
    });
  }

  getOrders() {
    return App.#database.find('orders')
  }

  showDatabase() {
    return App.#database.showStorage()
  }
}