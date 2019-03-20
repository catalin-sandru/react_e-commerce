import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data'

const ProductContext = React.createContext();
// Provider
// Consumer

class ProductProvider extends Component {
  state = {
    products: [],
    details: detailProduct,
    cart: [],
    modal: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  };

  
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = {...item};
      tempProducts = [...tempProducts, singleItem];
    })
    this.setState(() => {
      return { products: tempProducts }
    })
  }

  componentDidMount() {
    this.setProducts();
  }

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  }

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return {details: product}
    })
  }

  addToCart = id => {
    const tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price
    product.total = price

    this.setState(() => {
      return {products: [...tempProducts], cart: [...this.state.cart, product]}
    }, () => this.cartTotals())
  }

  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return {modalProduct: product, modal: true}
    }, () => console.log(this.state))
  }

  closeModal = () => {
    this.setState(() => {
      return {modal: false}
    }
  )}

  increment = id => {
    console.log('increment')
  }

  decrement = id => {
    console.log('decrement')
  }

  removeItem = id => {
    console.log('removeItem')
  }

  clearCart = () => {
    this.setState(() => {
      return {cart: []}
    }, () => {
      this.setProducts();
      this.cartTotals();
    })
  }

  cartTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;

    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total
      }
    })
  }

  render() {
    return (
      <ProductContext.Provider value={
        {
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }
      }>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };