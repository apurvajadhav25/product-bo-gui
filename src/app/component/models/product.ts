export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imagePath: string;
    discount: number;

   
    constructor(id: number, name='', description = '', price = 1, imagePath = '../assets/angthi/2.jpg',discount=0) {
      this.id = id
      this.name = name
      this.description = description
      this.price = price
      this.imagePath = imagePath
      this.discount= discount
    }
  }