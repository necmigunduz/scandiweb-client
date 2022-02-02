import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/logo.png";

const options = [
  {id:0, value: 'Select currency', symbol: ''},
  {id:1, value: 'USD', symbol: '$'},
  {id:2, value: 'EUR', symbol: '€'},
  {id:3, value: 'GBP', symbol: '£'},
  {id:4, value: 'AUD', symbol: 'A$'},
  {id:5, value: 'RUB', symbol: '₽'},
  {id:6, value: 'JPY', symbol: '¥'},
]

class TopNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCurrency: '',
    }
  }

  handleChange = async (e) => {
    e.preventDefault();
    let sC = await e.target.value
    this.setState({selectedCurrency: sC});
    console.log(this.state.selectedCurrency)
  }
  render() {
    return (
      <div className="top-nav">
        <nav>
          <Link to="/" className="top-links">
            All-Products
          </Link>
          <Link to="/clothesList" className="top-links">
            Clothes
          </Link>
          <Link to="/techProductsList" className="top-links">
            Tech-Products
          </Link>
        </nav>
        <div>
          <img src={Logo} alt="Logo" width="150px" />
        </div>
       <select onChange={this.handleChange} defaultValue={0}>
         {options.map((option) => {
           return (
            <option key={option.id} value={option.value} >{option.value} {option.symbol}</option>
           )
         })}
       </select>
      </div>
    );
  }
}

export default TopNav;
