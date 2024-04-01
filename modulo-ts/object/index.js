"use strict";
// Object feito com o tipo qualsiasi
const obj = {
    name: 'Vinicius',
    idade: 30
};
// com esse tipo entao posso ter acesso na propriedade 
obj.idade = 50;
console.log(obj);
// Objeto feito com o tipo Object Global
let object = {
    name: 'Vinicius',
    idade: 30
};
// object = {
//   data : 23041993
// };
console.log(object);
// Objeto feito do tipo literal
let objeto;
objeto = {
    nome: "Vinicius",
    idade: 50
};
objeto.idade = 30;
console.log(objeto);
const oggetto = {
    nome: 'vinicius',
    idade: 30
};
oggetto.idade = 50;
console.log(oggetto);
;
const persona = {
    nome: 'Vinicius',
    idade: 30,
    dataNascimento: 19930423,
    codiceFiscale: 'JNQVCS23D93Z602N'
};
persona.idade = 20;
// Objeto feito com classe
class Client {
    constructor(nome, idade, dataNascimento) {
        this.nome = nome;
        this.idade = idade;
        this.dataNascimento = dataNascimento;
    }
}
;
const person = new Client('Vinicius', 30, 19930423);
person.idade = 40;
