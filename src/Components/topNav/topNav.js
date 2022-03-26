import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/logo.png";
import options from '../../Components/filter/options';

class TopNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCurrency: ''
    }
  }

  handleSelectedCurrency = async (e) => {
    e.preventDefault();
    let sC = await e.target.value
    this.setState({selectedCurrency: sC});
    this.props.sendSCToApp(this.state.selectedCurrency);
  }

  handleAll = () => {
    let sCat = 'all';
    this.props.sendSCATToApp(sCat);
  }

  handleClothes = () => {
    let sCat = 'clothes';
    this.props.sendSCATToApp(sCat);
  }

  handleTechs = () => {
    let sCat = 'techs';
    this.props.sendSCATToApp(sCat);
  }

  render() {
    return (
      <div className="top-nav">
        <nav>
          <Link to="/" className="top-links" onClick={this.handleAll} >
            All-Products |
          </Link>
          <Link to="/clothes" className="top-links" onClick={this.handleClothes}>
            Clothes |
          </Link>
          <Link to="/electronics" className="top-links" onClick={this.handleTechs}>
            Tech-Products
          </Link>
        </nav>
        <div>
          <img src={Logo} alt="Logo" width="150px" />
        </div>
       <select onChange={this.handleSelectedCurrency} defaultValue={0}>
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
