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
            <Route>
              <Home />
            </Route>
            <Route>
              <Clothes />
            </Route>
            <Route>
              <TechProducts />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
