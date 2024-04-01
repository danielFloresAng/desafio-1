class Product {
  constructor(title, description, price, thumbnail, stock, code, id) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
    this.id = id;
  }
}
//Productos de ejemplo
const itemTest1 = new Product(
  "Item de prueba 1",
  "item de prueba creado desde una clase",
  1200,
  "item1.jpg",
  "JD*&-h7",
  3,
  12
);
const itemTest2 = new Product(
  "Item de prueba 1",
  "item de prueba creado desde una clase",
  1000,
  "item2.jpg",
  "KL9)7-/",
  5,
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

// ---------- PROCESO DE TESTING ----------

/*  ✓ Se creará una instancia de la clase “ProductManager” */
const productManager = new ProductManager();

/*  ✓ Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío [] */
console.log(productManager.getProducts());

/*  ✓ Se llamará al método “addProduct” con los campos:
- title: “producto prueba”
- description:”Este es un producto prueba” - price:200,
- thumbnail:”Sin imagen”
- code:”abc123”,
- stock:25    */
productManager.addProduct({
  title: "prueba",
  description: " descripcieon",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
});



/*  ✓ El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE  */

/*  ✓ Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado  (falta ID)*/
console.log(productManager.getProducts());

/*  ✓ Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.  */

/*  ✓ Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo  */



// ---------- PRODUCTOS CREADOS DESDE UNA CLASE Y AGREGADOS AL MANAGER ----------
productManager.addProduct(itemTest1);
productManager.addProduct(itemTest2);



