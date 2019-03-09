import React, { Component }from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg'

class Navbar extends Component {
  render() {
    return(
      <nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img className="navbar-brand" src={logo} alt="store"/>
        </Link>

      </nav>
    )
  }
}
export default Navbar