class Auth {
  constructor() {
    this.customer = [];
  }
  regitser(name, email, shippingAddress) {
    this.customer.push(name, email, shippingAddress);
  }
  login(email) {
    return customer[email];
  }
}

module.exports = Auth;
