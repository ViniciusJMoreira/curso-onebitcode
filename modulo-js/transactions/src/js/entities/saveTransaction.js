import { render } from "./renderTransaction.js";
import { updateBalance } from "./updateBalance.js";
import { Database } from "./Database.js";
import { Transaction } from "./Transaction.js";

const database = new Database()

export async function saveTransaction(ev) {
  ev.preventDefault()

  const id = document.querySelector('#id').value,
  name = document.querySelector('#name').value,
  amount = document.querySelector('#amount').value
  
  if(id > 0) {
    const indexToConvert = database.findElement(Number(id)),
    newTransaction = new Transaction(name, amount)
    database.convertElement(indexToConvert, newTransaction)
    document.querySelector(`#transaction-${id}`).remove()
    render(newTransaction)
    document.querySelector('#id').value = 0
  } else {
    const newTransaction = new Transaction(name, amount)
    database.pushData(newTransaction)
    render(newTransaction)
  }
  ev.target.reset()
  updateBalance()
}

export async function setup() {
  database.getData.forEach(render)
  updateBalance()
}