import React, { Component }from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg'
import styled from 'styled-components'

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
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus"/>
            </span>
            My Cart
          </ButtonContainer>
        </Link>

      </nav>
    )
  }
}

const ButtonContainer = styled.button`
  font-size: 1.4rem;
  background: transparent;
  border: 0.2rem solid var(--lightBlue);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  transition: all 0.2s ease-in-out;
  color: var(--mainWhite);

  &:hover {
    background: var(--lightBlue);
    color: var(--mainDark);
  }
`

export default Navbar