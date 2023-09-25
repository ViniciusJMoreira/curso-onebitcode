function renderUser(userData) {
  const article = document.createElement('article')
  article.id = `user-${userData.id}`

  const fullname = document.createElement('h3')
  fullname.textContent = userData.fullname

  const paragraph = document.createElement('p')
  paragraph.innerHTML = `${userData.email} <br> <strong>${userData.password}</strong>`

  article.append(fullname, paragraph)
  document.querySelector('#users').append(article)
}

async function fetchUser() {
  const users = await fetch("http://localhost:3000/accounts").then((res) => res.json())
  users.forEach(renderUser)
}

document.addEventListener("DOMContentLoaded", () => {
  fetchUser()
})

const form = document.querySelector("form")

form.addEventListener("submit", async (ev) => {
  ev.preventDefault()

  const user = {
    fullname: document.querySelector("#name").value ,
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value
  }

  const response = await fetch("http://localhost:3000/accounts",{
  method: "post",
  headers: {
    'content-type' : 'application/json'
  },
  body: JSON.stringify(user)
  })

  form.reset()

  const savedAccount = await response.json()
  renderUser(savedAccount)
  console.log(savedAccount, user)
})
