const welcome = {
  nome : 'Vinicius' , 
  idade : 29 ,
  dizerOla () {
    console.log('Olá mundo, me chamo ' + this.nome + ' , e tenho ' + this.idade + ' anos!')
  }
}
// welcome é a variavél objeto que possue a função dizerOla (chamada método)
welcome.dizerOla()