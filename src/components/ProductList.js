import React, { Component } from 'react'
import Title from './Title';
import { storeProducts } from '../data'
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
  state = {
    products: storeProducts
  }
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="OUR" title="PRODUCTS"/>
            <div className="row">
              <ProductConsumer>
                {value => {
                  console.log(value)
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
