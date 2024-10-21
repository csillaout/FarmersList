const Customer = require('./Customer.js');

class Auth {
  constructor() {
    this.customers = [];
  }
  register(name, email, shippingAddress) {
    this.customers.push(new Customer(name, email, shippingAddress));
  }
  login(email) {
    for (let customer of this.customers) {
        if (customer.email == email) {
            return customer;
        }
    }
    return null; // default
  }
}

module.exports = Auth;
