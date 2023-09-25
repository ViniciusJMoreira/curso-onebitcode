const App = require("./App")

App.createUser("vinicius@email.com", "Vinicius Moreira")
App.createUser("ericksen@email.com", "Ericksen Moreira")
App.createUser("alessandro@email.com", "Alessandro Moreira")

App.deposit("vincius@email.com", 100)
App.transfer("vinicius@email.com", "ericksen@email.com" , 20)

App.changeLoanFee(10)
App.takeLoan("alessandro@email.com", 2000, 12)

console.log(App.findUser("vinicius@email.com"))
console.log(App.findUser("vinicius@email.com").account)
console.log(App.findUser("ericksen@email.com"))
console.log(App.findUser("ericksen@email.com").account)
console.log(App.findUser("alessandro@email.com"))
console.log(App.findUser("alessandro@email.com").account.loans[0])
