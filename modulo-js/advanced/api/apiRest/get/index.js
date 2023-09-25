function createCountryCard(country) {
  const card = document.createElement('div')
  card.classList.add('country')

  const elementName = document.createElement('h2')
  const countryName = country.name.common
  elementName.textContent = countryName

  const flag = document.createElement('img')
  flag.alt = countryName
  flag.src = country.flags.svg

  card.append(elementName, flag)
  document.querySelector('#countries').append(card)
}

async function getCountries() {
  const response = await fetch('https://restcountries.com/v3.1/all')
  const countries = await response.json()
  countries.forEach(createCountryCard)
}

getCountries()