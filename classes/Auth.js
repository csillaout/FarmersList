class Auth {
  constructor() {
    this.customers = [];
  }
  register(name, email, shippingAddress) {
    this.customers.push(new Customer(name, email, shippingAddress));
  }
  login(email) {
    return this.customers[email];
  }
}

module.exports = Auth;
