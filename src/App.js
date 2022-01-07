import './App.css';
import React, { Component } from 'react'
import { PRODUCTS_QUERY } from './query'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:4000/', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ query: PRODUCTS_QUERY })
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ products: data.data.categories[0].products })
      })
      .catch(error => console.log(error.message))
  }

  render() {
    return (
      <div className="App">
        <h2>Products</h2>
        <ul className='product-ul'>
          {this.state.products.map((product) => {
            return (
              <li key={product.id} className='product-li'>
                <span>{product.name}</span>
                <img src={product.gallery[0]} alt='products'/>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }

}

export default App;
