import { User } from "./entities/User.js"

const form = document.querySelector('form')

form.addEventListener('submit', (ev) => {
  ev.preventDefault()

  const fullname = document.querySelector('#fullname'),
  email = document.querySelector('#email'),
  password = document.querySelector('#password')

  new User(fullname, email, password)
})