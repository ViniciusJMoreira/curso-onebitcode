////////////////////////
function Log() {
  return function (target: any, key:any, descriptor:any) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
      // Mostrando o nome do metodo(key) e mostrando os parametros do metodo
      // console.log('-----------------');
      // console.log(`Chamando o metodo ${key} com os parametros ${JSON.stringify(args)}`);

      const result = originalMethod.apply(this, args);
      // mostrando o nome do metodo e o resultado do retorno da funcao
      console.log('-----------------');
      console.log(`O metodo ${key} retornou o valor ${JSON.stringify(result)}`);

      // é o retorno do metodo stesso
      return result;
    }
  }
}

function Decorator() { 
  return function (target: any, key : any, descriptor: any) {
    descriptor.value = function(value:number) {
      //
      return value * value;
    }
  };
}

function LogClass() {
  return function(key:any) {
    console.log(key.name);
  }
}

@LogClass()
class Planet {
  name : string
  constructor(name: string) {
    this.name = name
  }

  // @Decorator()
  @Log()
  calculate(value : number) {
    //
    return value * 2;
  }

  @Log()
  invertName() {
    return this.name.split('').reverse().join('');
  }
}

const newPlanet = new Planet('Terra');
const result = newPlanet.calculate(10);
console.log(`Resultado ${result}`);
newPlanet.invertName();

//////////////////////// PRATICA

// function LogClass() {
//   return function (key:any)  {
//     console.log(`${key.value}`)
//   }
// }

// function Data() {
//   return function(target:any, key:any, descriptor:any) {
//     descriptor.value = function Anonimo(number:number) {
//       console.log(`target ${target.name}, do key ${key}`)
//       return number + 5;
//     }
//   }
// }

// @LogClass()
// class MyClass {

//   constructor() {
//     console.log(`Instancia criada`);
//   }

// @Data()
// metodoChamado(number: number) {
//   return number + 2;
// }
// }

// const newclass = new MyClass();
// // console.log(newclass);
// console.log(newclass.metodoChamado(2));