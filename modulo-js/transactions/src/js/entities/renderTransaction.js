import { updateBalance } from "./updateBalance.js";
import { Database } from "./Database.js"
const database = new Database()

function createTransactionContainer(id) {
    const container = document.createElement('div')
    container.classList.add('transaction')
    container.id = `transaction-${id}`
    return container
  }
  
function createTransactionTitle(name) {
    const title = document.createElement('span')
    title.classList.add('transaction-title')
    title.textContent = name
    return title
  }
  
function createTransactionAmount(amount) {
    const span = document.createElement('span')
    const formatedAmount = Number(amount).toLocaleString('pt-BR', 
      {style: 'currency', currency: 'BRL'})
    if(amount > 0) {
      span.textContent = `${formatedAmount} C`
      span.classList.add('transaction-amount','credit')
    }else {
      span.textContent = `${formatedAmount} D`
      span.classList.add('transaction-amount','debit')
    }
    return span
  }

function createEditTransactionButton(transaction) {
    const editBtn = document.createElement('button')
    editBtn.classList.add('edit-btn')
    editBtn.textContent = 'Editar'
    editBtn.addEventListener('click', async() => {
      document.querySelector('#id').value = transaction.id
      document.querySelector('#name').value = transaction.name
      document.querySelector('#amount').value = transaction.amount
    })
    return editBtn
  }

function createDeleteTransactionButton(id) {
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-btn')
    deleteBtn.textContent = 'Excluir'
    deleteBtn.addEventListener('click',() => {
      const indexToConvert = database.findElement(Number(id))
      database.deleteElement(indexToConvert)
      deleteBtn.parentElement.remove()
      console.log(database.getData)
      updateBalance()
    })
    return deleteBtn
  }

export function render(transaction) {
    const container = createTransactionContainer(transaction.id)
    const name = createTransactionTitle(transaction.name)
    const amount = createTransactionAmount(transaction.amount)
    const editBtn = createEditTransactionButton(transaction)
    const deleteBtn = createDeleteTransactionButton(transaction.id)
    document.querySelector('#transactions').append(container)
    container.append(name,amount, editBtn, deleteBtn)
  }