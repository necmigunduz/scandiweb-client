import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/logo.png";

class TopNav extends Component {
  render() {
    return (
      <div className="top-nav">
        <nav>
          <Link to="/" className="top-links">
            Home
          </Link>
          <Link to="/productList" className="top-links">
            Product List
          </Link>
        </nav>
        <div>
          <img src={Logo} alt="Logo" width="150px" />
        </div>
        <div>
          <select id="cars">
            <option value="USD">$</option>
            <option value="EURO">€</option>
            <option value="GBP">£</option>
            <option value="AUD"> A$</option>
            <option value="RUB">₽</option>
            <option value="JPY">¥</option>
          </select>
        </div>
      </div>
    );
  }
}

export default TopNav;
