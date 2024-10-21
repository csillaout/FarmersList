const Product = require("./Product.js");

class Cart {
  construction() {
    this.products = [];
    this.total = 0;
  }

  addProduct(Product) {
    this.products.push(Product);
    this.total += Product["price"];
  }
}

module.exports = Cart;
