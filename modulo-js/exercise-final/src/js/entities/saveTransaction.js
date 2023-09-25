import { render } from "./renderTransaction.js";
import { fetchPost, fetchPut } from "./fetchTransactions.js";
import { updateBalance } from "./updateBalance.js";

export async function fetchUpdate () {
  return await fetch('http://localhost:3000/transactions').then(async(res) => await res.json())
}

export async function saveTransaction(ev) {
  ev.preventDefault()

  const id = document.querySelector('#id').value,
  name = document.querySelector('#name').value,
  amount = document.querySelector('#amount').value
  
  if(id > 0) {
    const result = await fetchPut(id, name, amount)
    document.querySelector(`#transaction-${id}`).remove()
    render(result)
  } else {
    const result = await fetchPost(name, amount)
    render(result)
  }
  ev.target.reset()
  updateBalance()
}

export async function setup() {
  const result = await fetchUpdate()
  result.forEach(render)
  updateBalance()
}