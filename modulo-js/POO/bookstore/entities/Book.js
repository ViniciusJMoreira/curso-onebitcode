const Product = require("./Product");

module.exports = class Book extends Product {
  constructor(title, synopsis, genre, author, description, pages, price, inStock = 0) {
    super(`Livro: ${title}`, description, price, inStock)
    this.title = title
    this.synopsis = synopsis
    this.genre = genre
    this.author = author
    this.pages = pages
  }
}