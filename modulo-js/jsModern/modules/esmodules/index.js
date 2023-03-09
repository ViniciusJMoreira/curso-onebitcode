import { label, input, br} from "./funcoes.js"
import {inline} from "./inline.js"
import importDefault from "./inline.js"
import { noInline } from "./noInline.js"

console.log(label({for: 'id', textContent: 'Digite seu nome'}))
console.log(input({type: 'text', id: 'id', placeholder: 'Nome Completo'}))
console.log(br())

importDefault()
inline()

noInline()