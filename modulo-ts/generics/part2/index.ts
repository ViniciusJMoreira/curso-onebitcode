interface Ship {
  name: string,
  pilot: string
}

interface Falcon9 {
  name: string,
  pilot: string,
  speed?: number
}

const ship : Ship = {
  name: 'Wing',
  pilot: 'Vinicius'
}

function cloneShip<ShipType extends Ship>(ship: ShipType, name: string, pilot: string) : ShipType {
  const newship = ship;
  newship.name = name;
  newship.pilot = pilot;
  return newship;
}

const newship = cloneShip<Falcon9>(ship, 'Falcon9', 'Vinicius');
newship.speed = 0;

class Product {
  id: string;
  constructor() {
    this.id = Product.generateRandonCode();
  }
  static generateRandonCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let codeProduct = '';
  
    for (let i = 0; i < 10; i++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      codeProduct += characters[randomIndex];
    }
  
    return codeProduct;
  };
}

class Book extends Product {
  title: string;
  page: number;
  author: string
  constructor(author: string, title: string, page: number) {
    super()
    this.author = author,
    this.title = title,
    this.page = page
  }
}

class Film extends Product {
  category: string;
  year: number;
  constructor(category: string, year:number) {
    super()
    this.category = category,
    this.year = year
  }
}

const newbook = new Book('Seja Foda', 'Caio Car', 200);
const newfilm = new Film('200', 2010);

console.log(newbook);