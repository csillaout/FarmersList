class Cart {
    constructor() {
        this.products = [];
        this.total = 0;
    }

    addProduct(item) {
        this.products.push(item);
        this.total += item.price;
    }

    removeProduct(index) {
        let item = this.products.splice(index, 1)[0]; // returns an array
        this.total -= item.price;
    }
}