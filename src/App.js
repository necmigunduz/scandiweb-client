import './App.css';
import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductList from './Components/productList';
import TopNav from '../src/Components/topNav'

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <div className="App">
            <TopNav />
            <Switch>
              <ProductList />
            </Switch>
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
