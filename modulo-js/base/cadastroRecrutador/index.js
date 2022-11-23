const nome = prompt("Qual é seu primeiro nome ?");
const lastName = prompt("Qual é seu sobrenome ?");
const fieldOfStudy = prompt("Insira seu campo de estudo");
const yearOfBirth = prompt("Insira sua data de nascimento");

alert(
"Seu cadastro foi efetuado com sucesso ! \n" +
"\nSeu nome é " + nome + " " + lastName +
"\nSua profissão é " + fieldOfStudy + 
"\nA sua idade é " + (2022 - yearOfBirth) + " anos."
);