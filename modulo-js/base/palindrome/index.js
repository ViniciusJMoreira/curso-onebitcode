const word = prompt('Qual é a palavra ?')
let invertedWord = ''

for (let i = word.length-1 ;i>=0; i--) {
  invertedWord += word[i]
}if (word === invertedWord) {
  alert(
    word + ' é um palindromo'
  )
}else {
  alert(
    word + ' não é um palindromo \n\n' +
    word + ' !== ' + invertedWord
  )
}