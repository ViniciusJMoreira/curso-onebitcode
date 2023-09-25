import { saveTransaction, setup } from "./entities/saveTransaction.js"


const form = document.querySelector('form')
form.addEventListener('submit', saveTransaction)
document.addEventListener('DOMContentLoaded', setup)