import "./App.css";
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import TopNav from "./Components/topNav";
import ClothesList from "./Components/clothesList";
import TechProductsList from "./Components/techProductsList";
import AllProductsList from "./Components/allProductsList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <Routes>
          <Route path="/" element={<AllProductsList />} />
          <Route path="/clothesList" element={<ClothesList />} />
          <Route path="/techProductsList" element={<TechProductsList />} />
        </Routes>
      </div>
    );
  }
}

export default App;
