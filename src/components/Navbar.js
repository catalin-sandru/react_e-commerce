import React, { Component }from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg'

class Navbar extends Component {
  render() {
    return(
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        <Link to="/">
          <img className="navbar-brand" src={logo} alt="store"/>
        </Link>

        <ul className="navbar-nav align-items-center">
          <li className="nav-item-ml-5">
            <Link to="/" className="nav-link">Products</Link>
          </li>
        </ul>

        <Link to="/cart" className="ml-auto">
          <button>
            <i className="fas fa-cart-plus"/>
          </button>
        </Link>

      </nav>
    )
  }
}
export default Navbar