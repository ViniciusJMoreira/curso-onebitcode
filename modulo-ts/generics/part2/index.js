"use strict";
const ship = {
    name: 'Wing',
    pilot: 'Vinicius'
};
function cloneShip(ship, name, pilot) {
    const newship = ship;
    newship.name = name;
    newship.pilot = pilot;
    return newship;
}
const newship = cloneShip(ship, 'Falcon9', 'Vinicius');
newship.speed = 0;
class Product {
    id;
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
    }
    ;
}
class Book extends Product {
    title;
    page;
    author;
    constructor(author, title, page) {
        super();
        this.author = author,
            this.title = title,
            this.page = page;
    }
}
class Film extends Product {
    category;
    year;
    constructor(category, year) {
        super();
        this.category = category,
            this.year = year;
    }
}
const newbook = new Book('Seja Foda', 'Caio Carneiro', 200);
console.log(newbook);
