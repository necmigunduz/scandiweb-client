import "./App.css";
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import TopNav from "./Components/topNav";
import ProductList from "./Components/productList";
import Home from "./Components/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <Routes>
          <Route path="/productList" element={<ProductList />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    );
  }
}

export default App;
