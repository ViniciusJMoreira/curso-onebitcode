function first(array:string[]){
  return array[0];
}

function last<ArrayType>(array:ArrayType[]) : ArrayType {
  return array[array.length - 1];
}


const array = ['' , '' , '']

const firstArray = first(array);
const lastArray = last(array);

//

function example<type>(arg:type) : type {
  return arg
}

const string = example<string>('string');

const number = example<number>(2);