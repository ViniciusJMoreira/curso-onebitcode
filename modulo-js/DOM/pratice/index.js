function addElement(){
  const list = document.getElementById('listItem')
  const newLi = document.createElement('li')
  newLi.textContent = 'Element'
  list.appendChild(newLi)
}

let counter = 1
document.getElementById('counter').textContent = counter
const btnAdd = document.getElementById('btnAdd')
btnAdd.addEventListener('click', addElement)
btnAdd.addEventListener('click', function() {
  counter ++
  document.getElementById('counter').textContent = counter
})

document.getElementById('btnRemove').addEventListener('click', function(){
  const list = document.getElementById('listItem')
  const removeLi = document.getElementsByTagName('li')
  list.removeChild(removeLi[removeLi.length -1])
  counter --
  document.getElementById('counter').textContent = counter
})