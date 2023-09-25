function phoneNumber(phoneNumberString) {
  const fixedNumber = phoneNumberString.replace(/[\sa-zA-Z]/g, '')
  this.countryCode = fixedNumber.match(/(?<=\+)\d{1,3}/)[0]
  this.ddd = fixedNumber.match(/(?<=\()\d{1,2}(?=\))/)[0]
  this.number = fixedNumber.match(/(?<=\)).+/)[0].replace(/-/g, '')
}

console.log(new phoneNumber('+55 (00) 0000-0000'))                                                     