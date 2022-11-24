const button = document.getElementById('registerButton')
button.addEventListener('click', register) 

function register(ev) {
  const section = ev.currentTarget.parentNode
  const username = section.children.username.value
  const password = section.children.password.value
  const passwordConfirm = section.children.passwordConfirmation.value

  if (password === passwordConfirm) {
    alert('Username : ' + username + ' Cadastrado com sucesso!')
  }else {
    alert('As senhas não conferem')
  }
}

const buttonRemove = document.getElementById('removeEvent')
buttonRemove.addEventListener('click', function(){
  button.removeEventListener('click', register)
  alert('Evento removido!')
})

button.addEventListener('mouseenter', function(ev){
  console.log(ev.currentTarget)
})