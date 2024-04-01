// literal type
let literal : "Hello,world" // Nao podemos alterar o seu valor

// literal = "hello" // Nesse caso causaria error no codigo, porque o tipo literal tem um valor unico

// union type

let unionOption : "Yes" | "No" // podemos alterar a variavel na condiçao referenciada 
// let res = option <= Nao podemos atribuir esse tipo em variaveis, enquanto nao for atribuido o valor

unionOption = "Yes"

if(unionOption === "Yes"){
  console.log(unionOption)
}else if(unionOption === "No"){
  console.log(unionOption)
}

// alias type
 
// Criando assim um type personalizado
type aliasOption = "Yes" | "No" | "Maybe"

// a diferença do union com o alias podemos reutilizar o tipo no codigo
let option : aliasOption
option = "No"
option = "Yes"
option = "Maybe"

type nameCallback = (nome: string) => void

function greet(hello: nameCallback) {
  const name = String(prompt("Digite seu nome: "))
  hello(name)
}

greet((name) => console.log("Hello word" + name))