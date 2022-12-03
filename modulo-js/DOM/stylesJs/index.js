function themeLight() {
  document.body.style.color = '#000'
  document.body.style.backgroundColor = '#fff'
}

function themeDark() {
  document.body.style.color = '#fff'
  document.body.style.backgroundColor = '#000'
}

function toggleClass() {
  document.body.classList.toggle('is-light')
  document.body.classList.toggle('is-dark')
  document.body.classList.remove
}

document.getElementById('is-light').addEventListener('click', themeLight)
document.getElementById('is-dark').addEventListener('click', themeDark)
document.getElementById('toggleClass').addEventListener('click', toggleClass)
