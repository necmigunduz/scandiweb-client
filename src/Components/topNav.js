import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/logo.png";
import options from '../Components/filter/options';

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
    this.props.sendSCToApp(this.state.selectedCurrency);
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
