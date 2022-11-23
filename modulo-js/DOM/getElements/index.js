function verify () {
  const tagName = document.getElementsByTagName('li')
  console.log(tagName)

  const className = document.getElementsByClassName('teste')
  console.log(className)

  const byName = document.getElementsByName('teste1')
  console.log(byName)

  const selectorAll = document.querySelectorAll('#content-list > li > .teste')
  console.log(selectorAll)

  const selector = document.querySelector('#content-list > li > .teste')
  console.log(selector)

  const byId = document.getElementById('content-list')
  console.log(byId)
}