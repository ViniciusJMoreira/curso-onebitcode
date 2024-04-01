// Object feito com o tipo qualsiasi
let obj = {
  name: 'Vinicius',
  idade: 30
};

// com esse tipo entao posso ter acesso na propriedade 
obj.idade = 50;

console.log(obj)

// Objeto feito com o tipo Object Global

let object : Object = {
  name: 'Vinicius',
  idade: 30
};

// object = {
//   data : 23041993
// };

console.log(object);

// Objeto feito do tipo literal

let objeto : {
  nome : string,
  idade : number
};

objeto = {
  nome: "Vinicius",
  idade: 50
};

objeto.idade = 30;

console.log(objeto);

// Objeto feito do tipo type

type Objeto = {
  nome: string,
  idade: number
};

const oggetto : Objeto = {
  nome: 'vinicius',
  idade: 30
}

oggetto.idade = 50;

console.log(oggetto)

// Objeto feito do tipo interface
interface Person {
  nome:string,
  idade: number,
  dataNascimento?: number
}

interface codiceFiscale extends Person {
  codiceFiscale: string
};

const persona : codiceFiscale = {
  nome : 'Vinicius',
  idade : 30,
  dataNascimento : 19930423,
  codiceFiscale : 'JNQVCS23D93Z602N'
};

persona.idade = 20;

// Objeto feito com classe
class Client implements Person {
  nome: string;
  idade: number;
  dataNascimento: number;
  constructor(nome:string, idade: number, dataNascimento:number) {
    this.nome = nome
    this.idade = idade
    this.dataNascimento = dataNascimento
  }
};

const person = new Client('Vinicius', 30, 19930423);

person.idade = 40;