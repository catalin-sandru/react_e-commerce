import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './ButtonComponent'

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          console.log(value.details)
          const {id, company, img, info, price, title, inCart} = value.details
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} alt="product image" className="img-fluid"/>
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h1>title: {title}</h1>
                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
