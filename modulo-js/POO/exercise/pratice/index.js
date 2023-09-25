const Author = require("./Author");

const newAuthor = new Author('Vinicius')

const newPost = newAuthor.writePost('O que voce esta pensando', 'Estou praticando javascript')

newPost.addComment('Larissa', 'Eu tambem estou praticando!')
newPost.addComment('Marcos', 'Eu tambem estou praticando!')

console.log(newAuthor)
console.log(newPost)