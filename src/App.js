import "./App.css";
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import TopNav from "./Components/topNav";
// import ClothesList from "./Components/clothesList";
// import TechProductsList from "./Components/techProductsList";
import Products from "./Components/products/products";

class App extends Component {
  state = { selectedCurrency: "", selectedCategory: "" };

  getCurrencyFromTopNav = (SC) => {
    this.setState({
      selectedCurrency: SC,
    });
  };

  getCategoryFromTopNav = (SCAT) => {
    this.setState({
      selectedCategory: SCAT
    })
  };

  render() {
    return (
      <div className="App">
        <TopNav sendSCToApp={this.getCurrencyFromTopNav}  sendSCATToApp={this.getCategoryFromTopNav} />
        <Routes>
          <Route
            path="/"
            element={<Products dataFromParent={this.state.selectedCurrency} categoryFromParent={this.state.selectedCategory} />}
          />
          <Route
            path="/clothes"
            element={<Products dataFromParent={this.state.selectedCurrency} categoryFromParent={this.state.selectedCategory} />}
          />
          <Route
            path="/techProducts"
            element={<Products dataFromParent={this.state.selectedCurrency} categoryFromParent={this.state.selectedCategory} />}
          />
        </Routes>
      </div>
    );
  }
}

export default App;
