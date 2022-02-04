import "./App.css";
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import TopNav from "./Components/topNav";
import ClothesList from "./Components/clothesList";
import TechProductsList from "./Components/techProductsList";
import AllProductsList from "./Components/allProductsList";

class App extends Component {
  state = { selectedCurrency : '' };

  getDataFromTopNav = (SC) => {
    this.setState({
      selectedCurrency: SC
    })
  };

  render() {
    return (
      <div className="App">
        <TopNav sendSCToApp={this.getDataFromTopNav} />
        {/* <p>{this.state.selectedCurrency}</p> */}
        <Routes>
          <Route path="/" element={<AllProductsList dataFromParent={this.state.selectedCurrency} />} />
          <Route path="/clothesList" element={<ClothesList dataFromParent={this.state.selectedCurrency} />} />
          <Route path="/techProductsList" element={<TechProductsList dataFromParent={this.state.selectedCurrency} />} />
        </Routes>
      </div>
    );
  }
}

export default App;
