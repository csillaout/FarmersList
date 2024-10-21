class Customer {
    constructor(name, email, shippingAddress) {
        this.name = name; this.email = email;
        this.shippingAddress = shippingAddress; // Basic init
        this.orderHistory = [];
    }

    addToOrderHistory(cart) {
        this.orderHistory.push(cart);
    }
}

module.exports = Customer;