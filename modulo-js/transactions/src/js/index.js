import { saveTransaction, setup } from "./entities/saveTransaction.js"
import "../css/style.css"


const form = document.querySelector('form')
form.addEventListener('submit', saveTransaction)
document.addEventListener('DOMContentLoaded', setup)