import "./App.css";
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import TopNav from "./Components/topNav/topNav";
import AllProductsList from "./Components/products/products";
import ProductCard from "./Components/listItem/productCard";

class App extends Component {
  state = { selectedCurrency: "", selectedCategory: "" };

  getCurrencyFromTopNav = (SC) => {
    this.setState({
      selectedCurrency: SC,
    });
  };

  getCategoryFromTopNav = (SCAT) => {
    this.setState({
      selectedCategory: SCAT,
    });
  };

  render() {
    return (
      <div className="App">
        <TopNav
          sendSCToApp={this.getCurrencyFromTopNav}
          sendSCATToApp={this.getCategoryFromTopNav}
        />
        <Routes>
          <Route
            path="/"
            element={
              <AllProductsList
                dataFromParent={this.state.selectedCurrency}
                categoryFromParent={this.state.selectedCategory}
              />
            }
          />
          <Route path="/:id" element={<ProductCard />} />
          <Route
            path="/clothes"
            element={
              <AllProductsList
                dataFromParent={this.state.selectedCurrency}
                categoryFromParent={this.state.selectedCategory}
              />
            }
          />
          <Route path="/clothes/:id" element={<ProductCard />} />
          <Route
            path="/electronics"
            element={
              <AllProductsList
                dataFromParent={this.state.selectedCurrency}
                categoryFromParent={this.state.selectedCategory}
              />
            }
          />
          <Route path="/electronics/:id" element={<ProductCard />} />
        </Routes>
      </div>
    );
  }
}

export default App;
