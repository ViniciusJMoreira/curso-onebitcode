const Author = require("./Author");

const author = new Author('Vinicius')
const vinicius = author.writePost('Como vai seu dia', 'como passamos o dia hoje ?')
vinicius.addComment('Larissa','Respondendo..')

console.log(author)
console.log(vinicius)