const App = require("./App");

const app = new App()

app.createAuthor('Paulo Coelho', 'Portuguese', '...')
app.createAuthor('Rick Riordan', 'American', '...')

const authors = app.getAuthors()
app.showDatabase()

app.createBook('O Hobbit', '...', 'fantasy', authors[0], '...', 300, 19.99, 100)
app.createBook('A Sociedade do Anel', '...', 'fantasy', authors[0], '...', 400, 24.99, 100)
app.createBook('O Ladrão de Raios', '...', 'fantasy', authors[1], '...', 500, 24.99, 100)
app.createBook('A Piramide Vermelha', '...', 'fantasy', authors[1], '...', 600, 24.99, 100)

const books = app.getBooks()
app.showDatabase()

app.createUser('Vinicius', 'vinicius@gmail.com', '1234')

const users = app.getUsers()

const items = [
  {
    product: books[0],
    quantity: 2
  },
  {
    product: books[1],
    quantity: 1
  },
  {
    product: books[1],
    quantity: 1
  }
]

app.createOrder(items, users[0])

app.showDatabase()