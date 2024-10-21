class Auth {
  constructor() {
    this.customer = [];
  }
  register(name, email, shippingAddress) {
    this.customer.push(new Customer(name, email, shippingAddress));
  }
  login(email) {
    return customer[email];
  }
}

module.exports = Auth;
