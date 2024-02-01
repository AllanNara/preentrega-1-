import fs from 'fs';

// ... Pss, puedes utilizar un CartManager con un formato similar al manager de products
// para administrar los carritos, el codigo debajo es un ejemplo de estructura que podría tener
class CartManager {
  constructor(path) {
    this.path = path
  };

  async addCart() {};

  async getCartById(idCart) {};

  async addProductToCart(idCart, idProduct) {};
  
}

export default CartManager