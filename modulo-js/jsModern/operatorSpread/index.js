const arr = ['banana','maca','pera','laranja']
const arrClone = [...arr]
const arrCloneObj = {...arrClone}
arrClone.pop()
// Não haverá modifica no array original , assim clonando um novo array
console.log({arr, arrClone, arrCloneObj})

