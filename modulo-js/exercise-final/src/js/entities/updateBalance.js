import { fetchUpdate } from "./saveTransaction.js";

export async function updateBalance() {
  const balanceSpan = document.querySelector('#balance')
  const transactions = await fetchUpdate()
  const balance = transactions.reduce((sum, transaction) => sum + Number(transaction.amount), 0)
  balanceSpan.textContent = balance.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}