function addContact() {
  const contactList = document.getElementById('contactList')

  const listUl = document.createElement('ul')

  const title = document.createElement('h3')
  title.innerText = 'Contato'

  const nameLi = document.createElement('li')
  nameLi.innerText = 'Nome : '
  const nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.name = 'name-input'
  nameLi.appendChild(nameInput)
  listUl.appendChild(nameLi)
  listUl.appendChild(document.createElement('br'))

  const phoneLi = document.createElement('li')
  phoneLi.innerText = 'Telefone : '
  const phoneInput = document.createElement('input')
  phoneInput.type = 'text'
  phoneInput.name = 'phone-input'
  phoneLi.appendChild(phoneInput)
  listUl.appendChild(phoneLi)
  listUl.appendChild(document.createElement('br'))

  const emailLi = document.createElement('li')
  emailLi.innerText = 'Email : '
  const emailInput = document.createElement('input')
  emailInput.type = 'text'
  emailInput.name = 'email-input'
  emailLi.appendChild(emailInput)
  listUl.appendChild(emailLi)
  listUl.appendChild(document.createElement('br'))

  contactList.append(title, listUl)
}

function removeContact() {
  const contactList = document.getElementById('contactList')

  const title = document.getElementsByTagName('h3')
  const listUl = document.getElementsByTagName('ul')

  contactList.removeChild(title[title.length - 1])
  contactList.removeChild(listUl[listUl.length - 1])
}