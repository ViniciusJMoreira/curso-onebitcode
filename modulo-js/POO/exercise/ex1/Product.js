class Product {
  constructor(name, description, price) {
    this.name = name
    this.description = description
    this.price = price
    this.inStock = 0
  }
  addOnStock(quantity) {
    this.inStock += quantity
  }
  calculateDiscount(discount) {
    this.total = this.price * ((100 - discount) / 100)
  }
}

const phone = new Product('Samsung Galaxy', '8gb Ram, Intel Core i7', 800)
phone.addOnStock(2)
phone.calculateDiscount(10)
console.log(phone)