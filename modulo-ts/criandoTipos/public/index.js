"use strict";
// literal type
let literal; // Nao podemos alterar o seu valor
// literal = "hello" // Nesse caso causaria error no codigo
// union type
let unionOption; // podemos alterar a variavel na condiçao referenciada 
// let res = option <= Nao podemos atribuir esse tipo em variaveis, enquanto nao for atribuido o valor
unionOption = "Yes";
if (unionOption === "Yes") {
    console.log(unionOption);
}
else if (unionOption === "No") {
    console.log(unionOption);
}
// a diferença do union com o alias podemos reutilizar o tipo no codigo
let option;
option = "No";
option = "Yes";
option = "Maybe";
function greet(hello) {
    const name = String(prompt("Digite seu nome: "));
    hello(name);
}
greet((name) => console.log("Hello word" + name));
