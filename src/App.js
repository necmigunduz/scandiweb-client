import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "./Components/productList";
import TopNav from "../src/Components/topNav";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopNav />
          <Switch>
            <Route path="/" >
              <Home />
            </Route>
            <Route>
              <Clothes path="/clothes" />
            </Route>
            <Route>
              <TechProducts path="tech-products" />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
