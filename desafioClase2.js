class Product {
  constructor(title, description, price, thumbnail, stock, code, id) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.stock = stock;
    this.code = code;
    this.id = id;
  }
}
//Productos de ejemplo
const stratGuitar = new Product(
  "SVR Strat",
  "3 single coils pickups solid guitar",
  1200,
  "exStrat.jpg",
  3,
  "JD*&-h7",
  12
);
const teleGuitar = new Product(
  "Richie Kotzen telecaster",
  "2 single coils pickups solid guitar",
  1000,
  "exTele.jpg",
  5,
  "KL9)7-/",
  22
);

class ProductManager {
  constructor() {
    this.products = [];
  }
  addProduct(item) {
    this.products.push(item);
  }
  getProducts() {
    return this.products;
  }
  getProductsById(itemId) {
    let itemFind = this.products.find((item) => item.id === itemId);
    return itemFind ? itemFind : new Error("Not found");
  }
}

const productsManager = new ProductManager();
console.log();
productsManager.addProduct(teleGuitar);
productsManager.addProduct(stratGuitar);
console.log(productsManager.getProducts());

console.log(productsManager.getProductsById(2));
