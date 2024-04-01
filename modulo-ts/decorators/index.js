"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
////////////////////////
function Log() {
    return function (target, key, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            // Mostrando o nome do metodo(key) e mostrando os parametros do metodo
            // console.log('-----------------');
            // console.log(`Chamando o metodo ${key} com os parametros ${JSON.stringify(args)}`);
            const result = originalMethod.apply(this, args);
            // mostrando o nome do metodo e o resultado do retorno da funcao
            console.log('-----------------');
            console.log(`O metodo ${key} retornou o valor ${JSON.stringify(result)}`);
            return result;
        };
    };
}
function Decorator() {
    return function (target, key, descriptor) {
        descriptor.value = function (value) {
            //
            return value * value;
        };
    };
}
function LogClass() {
    return function (key) {
        console.log(key.name);
    };
}
let Planet = class Planet {
    name;
    constructor(name) {
        this.name = name;
    }
    // @Decorator()
    calculate(value) {
        //
        return value * 2;
    }
    invertName() {
        return this.name.split('').reverse().join('');
    }
};
__decorate([
    Log()
], Planet.prototype, "calculate", null);
__decorate([
    Log()
], Planet.prototype, "invertName", null);
Planet = __decorate([
    LogClass()
], Planet);
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
