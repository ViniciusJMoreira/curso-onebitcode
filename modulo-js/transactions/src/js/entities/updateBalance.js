import { Database } from "./Database.js"
const database = new Database()

export async function updateBalance() {
  const balanceSpan = document.querySelector('#balance')
  const transactions = database.getData
  const balance = transactions.reduce((sum, transaction) => sum + Number(transaction.amount), 0)
  balanceSpan.textContent = balance.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
  if(balance < 0) {
    balanceSpan.classList.remove('credit')
    balanceSpan.classList.add('debit')
  }else {
    balanceSpan.classList.remove('debit')
    balanceSpan.classList.add('credit')
  }
}