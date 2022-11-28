const requestForm = document.getElementById('requestForm')
requestForm.addEventListener('submit', function(ev) {
  ev.preventDefault()
  const nameUser = document.getElementById('nameUser').value
  const address = document.getElementById('address').value
  const breadType = document.getElementById('breadType').value
  const main = document.querySelector('input[name="principal"]:checked').value
  let salad = String()
  document.querySelectorAll('input[name="salad"]:checked').forEach(function(item){
    salad += ' ' + item.value
  })
  

  console.log({nameUser, address, breadType, main, salad})
})