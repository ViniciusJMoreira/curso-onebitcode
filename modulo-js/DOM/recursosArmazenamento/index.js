document.getElementById('sessionButton').addEventListener('click', function(){
  const saveStorage = document.getElementById('sessionStorage').value
  window.sessionStorage.setItem('info', saveStorage)
  saveStorage.value = ''
})

document.getElementById('showSession').addEventListener('click', function(){
  const sessionValue = window.sessionStorage.getItem('info')
  alert('O valor do session Storage é ' + sessionValue)
})

document.getElementById('localButton').addEventListener('click', function(){
  const saveStorage = document.getElementById('localStorage').value
  window.localStorage.setItem('info', saveStorage)
  saveStorage.value = ''
})

document.getElementById('showLocal').addEventListener('click', function(){
  const localValue = window.localStorage.getItem('info')
  alert('O valor do local Storage é ' + localValue)
})