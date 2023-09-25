const Address = require("./Address");
const Person = require("./Person");

const addr = new Address('Marconi Guglielmo', '10' , 'Verucchio')

const person = new Person('Vinicius', addr)

console.log(person)